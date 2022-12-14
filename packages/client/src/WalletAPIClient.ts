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
import { TransportWalletAPI } from "./TransportWalletAPI";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

// temporary
const requestHandlers = {
  "event.account.updated": async (_request: RpcRequest) => {
    console.log("accounts updated !");
  },
};

export class WalletAPIClient extends RpcNode<
  typeof requestHandlers,
  WalletHandlers
> {
  private logger: Logger;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, requestHandlers);
    this.logger = logger;
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

    if ("error" in transactionSignResult) {
      throw new RpcError(transactionSignResult.error);
    }

    const safeResults = schemaTransactionSign.result.parse(
      transactionSignResult.result
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

    if ("error" in transactionSignResult) {
      throw new RpcError(transactionSignResult.error);
    }

    const safeResults = schemaTransactionSignAndBroadcast.result.parse(
      transactionSignResult.result
    );

    return safeResults.transactionHash;
  }

  /**
   * Let the user sign the provided message.
   * In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md) or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)
   * @param accountId - Ledger Live id of the account
   * @param message - Message the user should sign
   *
   * @returns Message signed
   */
  async signMessage(accountId: string, message: Buffer): Promise<Buffer> {
    const messageSignResult = await this.request("message.sign", {
      accountId,
      hexMessage: message.toString("hex"),
    });

    if ("error" in messageSignResult) {
      throw new RpcError(messageSignResult.error);
    }

    const safeResults = schemaMessageSign.result.parse(
      messageSignResult.result
    );

    return Buffer.from(safeResults.hexSignedMessage, "hex");
  }

  /**
   * List accounts added by user on the connected wallet
   *
   * @returns The list of accounts on the connected wallet
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

    if ("error" in listAccountsResult) {
      throw new RpcError(listAccountsResult.error);
    }

    const safeResults = schemaAccountList.result.parse(
      listAccountsResult.result
    );

    return safeResults.rawAccounts.map(deserializeAccount);
  }

  /**
   * Ask the connected wallet for an account matching a specific set of critterias.
   *
   * @param params - Parameters of the request.
   *
   * @returns The account selected by the user
   */
  async requestAccount(params?: {
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencyIds?: string[];
  }): Promise<Account> {
    const requestAccountsResult = await this.request("account.request", {
      currencyIds: params?.currencyIds,
    });

    if ("error" in requestAccountsResult) {
      throw new RpcError(requestAccountsResult.error);
    }

    const safeResults = schemaAccountRequest.result.parse(
      requestAccountsResult.result
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

    if ("error" in receiveAccountsResult) {
      throw new RpcError(receiveAccountsResult.error);
    }

    const safeResults = schemaAccountReceive.result.parse(
      receiveAccountsResult.result
    );

    return safeResults.address;
  }

  /**
   * List cryptocurrencies supported by the connected wallet, providing filters by name or ticker
   *
   * @param params - Filters for currencies
   *
   * @returns The list of corresponding cryptocurrencies
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

    if ("error" in listCurrenciesResult) {
      throw new RpcError(listCurrenciesResult.error);
    }

    const safeResults = schemaCurrencyList.result.parse(
      listCurrenciesResult.result
    );

    return safeResults.currencies;
  }

  /**
   * Open low-level transport in the connected wallet
   *
   * @param params - Params for the transport
   *
   * @returns An instance of Transport compatible with @ledgerhq/hw-transport
   */
  async deviceTransport(
    params: DeviceTransport["params"]
  ): Promise<HWTransport> {
    const deviceTransportResult = await this.request(
      "device.transport",
      params
    );

    if ("error" in deviceTransportResult) {
      throw new RpcError(deviceTransportResult.error);
    }

    const safeResults = schemaDeviceTransport.result.parse(
      deviceTransportResult.result
    );

    return TransportWalletAPI.open({
      walletApi: this,
      transportId: safeResults.transportId,
    });
  }

  /*
   * List the wallet's implemented methodIds
   *
   * @returns The list of implemented method ids
   *
   * @beta Filtering not yet implemented
   */
  async capabilities(): Promise<string[]> {
    const walletCapabilitiesResult = await this.request(
      "wallet.capabilities",
      {}
    );

    if ("error" in walletCapabilitiesResult) {
      throw new RpcError(walletCapabilitiesResult.error);
    }

    const safeResults = schemaWalletCapabilities.result.parse(
      walletCapabilitiesResult.result
    );

    return safeResults.methodIds;
  }
}
