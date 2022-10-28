// TODO: reimplement all methods

import {
  Logger,
  RpcRequest,
  Transport,
  RpcError,
  RpcErrorCode,
  RpcNode,
  RFC,
  Transaction,
  serializeTransaction,
  RpcResponse,
  Account,
  deserializeAccount,
  Currency,
} from "@ledgerhq/wallet-api-core";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

// temporary
const requestHandlers = {
  "event.account.updated": async (_request: RpcRequest) => {
    console.log("accounts updated !");
  },
};

export class WalletAPIClient extends RpcNode<typeof requestHandlers> {
  private logger: Logger;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, requestHandlers);
    this.logger = logger;
  }

  protected handleRpcRequest(request: RpcRequest) {
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
    options?: RFC.TransactionOptions
  ): Promise<Buffer> {
    const transactionSignResult =
      (await this.request<RFC.TransactionSignParams>("transaction.sign", {
        accountId,
        rawTransaction: serializeTransaction(transaction),
        options,
      })) as RpcResponse<RFC.TransactionSignResult>;

    if ("error" in transactionSignResult) {
      throw new RpcError(transactionSignResult.error);
    }

    return Buffer.from(
      transactionSignResult.result.signedTransactionHex,
      "hex"
    );
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
    options?: RFC.TransactionOptions
  ): Promise<string> {
    const transactionSignResult =
      (await this.request<RFC.TransactionSignAndBroadcastParams>(
        "transaction.signAndBroadcast",
        {
          accountId,
          rawTransaction: serializeTransaction(transaction),
          options,
        }
      )) as RpcResponse<RFC.TransactionSignAndBroadcastResult>;

    if ("error" in transactionSignResult) {
      throw new RpcError(transactionSignResult.error);
    }

    return transactionSignResult.result.transactionHash;
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
    const messageSignResult = (await this.request<RFC.MessageSignParams>(
      "message.sign",
      {
        accountId,
        hexMessage: message.toString("hex"),
      }
    )) as RpcResponse<RFC.MessageSignResult>;

    if ("error" in messageSignResult) {
      throw new RpcError(messageSignResult.error);
    }

    return Buffer.from(messageSignResult.result.hexSignedMessage, "hex");
  }

  /**
   * List accounts added by user on the connected wallet
   *
   * @returns The list of accounts on the connected wallet
   */
  async listAccounts(params: {
    /**
     * Select a set of currencies by id to filter accounts against.
     */
    currencyIds: string[];
  }): Promise<Account[]> {
    const listAccountsResult = (await this.request<RFC.AccountListParams>(
      "account.list",
      {
        currencyIds: params.currencyIds,
      }
    )) as RpcResponse<RFC.AccountListResult>;

    if ("error" in listAccountsResult) {
      throw new RpcError(listAccountsResult.error);
    }

    return listAccountsResult.result.rawAccounts.map(deserializeAccount);
  }

  /**
   * Ask the connected wallet for an account matching a specific set of critterias.
   *
   * @param params - Parameters of the request.
   *
   * @returns The account selected by the user
   */
  async requestAccount(params: {
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencyIds: string[];
  }): Promise<Account> {
    const requestAccountsResult = (await this.request<RFC.AccountRequestParams>(
      "account.request",
      {
        currencyIds: params.currencyIds,
      }
    )) as RpcResponse<RFC.AccountRequestResult>;

    if ("error" in requestAccountsResult) {
      throw new RpcError(requestAccountsResult.error);
    }

    console.log({ requestAccountsResult });

    return deserializeAccount(requestAccountsResult.result.rawAccount);
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
  async listCurrencies(params: {
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencyIds: string[];
  }): Promise<Currency[]> {
    const listCurrenciesResult = (await this.request<RFC.CurrencyListParams>(
      "currency.list",
      {
        currencyIds: params.currencyIds,
      }
    )) as RpcResponse<RFC.CurrencyListResult>;

    if ("error" in listCurrenciesResult) {
      throw new RpcError(listCurrenciesResult.error);
    }

    return listCurrenciesResult.result.currencies;
  }
}
