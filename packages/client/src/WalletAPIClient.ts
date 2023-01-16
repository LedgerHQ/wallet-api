// TODO: reimplement all methods

import type HWTransport from "@ledgerhq/hw-transport";
import {
  Account,
  Currency,
  deserializeAccount,
  DeviceTransport,
  Logger,
  RpcError,
  RpcErrorCode,
  RpcNode,
  RpcRequest,
  schemaAccountList,
  schemaAccountReceive,
  schemaAccountRequest,
  schemaCurrencyList,
  schemaDeviceTransport,
  schemaMessageSign,
  schemaTransactionSign,
  schemaTransactionSignAndBroadcast,
  schemaWalletCapabilities,
  serializeTransaction,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
  Transport,
  WalletHandlers,
} from "@ledgerhq/wallet-api-core";
import { Bitcoin } from "./modules/Bitcoin";
import { TransportWalletAPI } from "./TransportWalletAPI";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

// temporary
const requestHandlers = {
  "event.account.updated": async (_request: RpcRequest) => {
    console.log("accounts updated !");
  },
};

/**
 * WalletAPI Client which rely on WindowMessage communication
 */
export class WalletAPIClient extends RpcNode<
  typeof requestHandlers,
  WalletHandlers
> {
  /**
   * Instance of the Bitcoin module
   */
  public bitcoin: Bitcoin;

  private logger: Logger;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, requestHandlers);
    this.logger = logger;
    this.bitcoin = new Bitcoin(this);
  }

  protected onRequest(request: RpcRequest) {
    this.logger.log(request.method);
    const handler =
      this.requestHandlers[request.method as keyof typeof this.requestHandlers];

    if (!handler) {
      throw new RpcError({
        code: RpcErrorCode.METHOD_NOT_FOUND,
        message: "method not found",
      });
    }

    return handler(request);
  }

  /**
   * Let the user sign a transaction that won't be broadcasted by the connected wallet
   * @param accountId - id of the account
   * @param transaction - The transaction object in the currency family-specific format
   * @param options - Extra parameters
   *
   * @returns The raw signed transaction
   * @throws {@link RpcError} if an error occured on server side
   */
  async signTransaction(
    accountId: string,
    transaction: Transaction,
    options?: TransactionSign["params"]["options"]
  ): Promise<Buffer> {
    const transactionSignResult = await this.request("transaction.sign", {
      accountId,
      rawTransaction: serializeTransaction(transaction),
      options,
    });

    const safeResults = schemaTransactionSign.result.parse(
      transactionSignResult
    );

    return Buffer.from(safeResults.signedTransactionHex, "hex");
  }

  /**
   * Let the user sign and broadcast a transaction
   * @param accountId - id of the account
   * @param transaction - The transaction object in the currency family-specific format
   * @param options - Extra parameters
   *
   * @returns The transaction hash
   * @throws {@link RpcError} if an error occured on server side
   */
  async signTransactionAndBroadcast(
    accountId: string,
    transaction: Transaction,
    options?: TransactionSignAndBroadcast["params"]["options"]
  ): Promise<string> {
    const transactionSignResult = await this.request(
      "transaction.signAndBroadcast",
      {
        accountId,
        rawTransaction: serializeTransaction(transaction),
        options,
      }
    );

    const safeResults = schemaTransactionSignAndBroadcast.result.parse(
      transactionSignResult
    );

    return safeResults.transactionHash;
  }

  /**
   * Let the user sign the provided message.
   * In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md)
   * or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)
   * @param accountId - Ledger Live id of the account
   * @param message - Message the user should sign
   *
   * @returns Message signed
   * @throws {@link RpcError} if an error occured on server side
   */
  async signMessage(accountId: string, message: Buffer): Promise<Buffer> {
    const messageSignResult = await this.request("message.sign", {
      accountId,
      hexMessage: message.toString("hex"),
    });

    const safeResults = schemaMessageSign.result.parse(messageSignResult);

    return Buffer.from(safeResults.hexSignedMessage, "hex");
  }

  /**
   * List accounts added by user on the connected wallet
   *
   * @param params - Filters for currencies
   *
   * @returns The list of accounts on the connected wallet
   * @throws {@link RpcError} if an error occured on server side
   */
  async listAccounts(params?: {
    /**
     * Select a set of currencies by id to filter accounts against.
     */
    currencyIds?: string[];
  }): Promise<Account[]> {
    const listAccountsResult = await this.request("account.list", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaAccountList.result.parse(listAccountsResult);

    return safeResults.rawAccounts.map(deserializeAccount);
  }

  /**
   * Ask the connected wallet for an account matching a specific set of critterias.
   *
   * @param params - Parameters of the request.
   *
   * @returns The account selected by the user
   * @throws {@link RpcError} if an error occured on server side
   */
  async requestAccount(params?: {
    /**
     * Select a set of currencies by id. Globing is enabled.
     * This list of currencies ids can be found [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/currencies.ts)
     * and the list of tokens ids [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/tokens.ts).
     * You can find more info on how the tokens ids are built for each chain / family you want to use by looking at the converter functions used [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/tokens.ts#L25-L33).
     * You can easily search for a token in the corresponding data file using it's contract address.
     * For example, the USDC token id for Ethereum is `ethereum/erc20/usd__coin`.
     */
    currencyIds?: string[];
  }): Promise<Account> {
    const requestAccountsResult = await this.request("account.request", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaAccountRequest.result.parse(
      requestAccountsResult
    );

    return deserializeAccount(safeResults.rawAccount);
  }

  /**
   * Let user verify it's account address on his device through Ledger Live
   *
   * @param accountId - id of the account
   *
   * @returns The verified address or an error message if the verification doesn't succeed
   */
  async receive(accountId: string): Promise<string> {
    const receiveAccountsResult = await this.request("account.receive", {
      accountId,
    });

    const safeResults = schemaAccountReceive.result.parse(
      receiveAccountsResult
    );

    return safeResults.address;
  }

  /**
   * List cryptocurrencies supported by the connected wallet, providing filters by name or ticker
   *
   * @param params - Filters for currencies
   *
   * @returns The list of corresponding cryptocurrencies
   * @throws {@link RpcError} if an error occured on server side
   *
   * @beta Filtering not yet implemented
   */
  async listCurrencies(params?: {
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencyIds?: string[];
  }): Promise<Currency[]> {
    const listCurrenciesResult = await this.request("currency.list", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaCurrencyList.result.parse(listCurrenciesResult);

    return safeResults.currencies;
  }

  /**
   * Open low-level transport in the connected wallet
   *
   * @param params - Params for the transport
   *
   * @returns An instance of Transport compatible with @ledgerhq/hw-transport
   * @throws {@link RpcError} if an error occured on server side
   */
  async deviceTransport(
    params: DeviceTransport["params"]
  ): Promise<HWTransport> {
    const deviceTransportResult = await this.request(
      "device.transport",
      params
    );

    const safeResults = schemaDeviceTransport.result.parse(
      deviceTransportResult
    );

    return TransportWalletAPI.open({
      walletApi: this,
      transportId: safeResults.transportId,
    });
  }

  /**
   * List the wallet's implemented methodIds
   *
   * @returns The list of implemented method ids
   * @throws {@link RpcError} if an error occured on server side
   *
   * @beta Filtering not yet implemented
   */
  async capabilities(): Promise<string[]> {
    const walletCapabilitiesResult = await this.request(
      "wallet.capabilities",
      {}
    );

    const safeResults = schemaWalletCapabilities.result.parse(
      walletCapabilitiesResult
    );

    return safeResults.methodIds;
  }
}
