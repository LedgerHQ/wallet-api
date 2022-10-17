import {
  MethodsHandlerMap,
  Transport,
  Currency,
  Logger,
  Account,
  CurrencyType,
} from "@ledgerhq/wallet-api-core";
import {
  JSONRPCClient,
  JSONRPCServer,
  JSONRPCServerAndClient,
  JSONRPCServerMiddleware,
} from "json-rpc-2.0";
import listAccounts from "./handlers/listAccounts";
import listCurrencies from "./handlers/listCurrencies";
import filterByCurrencies from "./utils/filterByCurrencies";

const defaultLogger = new Logger("Wallet-API-Server");

export type ServerParams = {
  logger: Logger;
  currencies?: Currency[];
  currenciesNoToken?: Currency[];
  accounts?: Account[];
  accountsNoToken?: Account[];
};

export default class Server {
  /**
   * @ignore
   * @internal
   */
  private transport: Transport;

  /**
   * @ignore
   * @internal
   */
  private logger: Logger;

  /**
   * @ignore
   * @internal
   */
  private serverAndClient?: JSONRPCServerAndClient<ServerParams>;

  /**
   * @internal
   * The list of currencies available for the Wallet APP communicating with this
   * server instance.
   * This list includes the intersection between the list of currencies handled
   * by the wallet implementing the Server and the currencies authorized for the
   * current Wallet APP, defined in it's manifest.
   */
  private currencies?: Currency[];

  /**
   * @internal
   * The list of currencies stripped of all tokens.
   * Used internally by the API to easilly return currencies including or not token ones
   */
  private currenciesNoToken?: Currency[];

  /**
   * @internal
   * The list of accounts available for the Wallet APP communicating with this
   * server instance.
   * This list includes the list of accounts handled by the wallet implementing
   * the Server, filtered according to the currencies authorized for the
   * current Wallet APP, defined in it's manifest.
   */
  private accounts?: Account[];

  /**
   * @internal
   * The list of accounts stripped of all token accounts.
   * Used internally by the API to easilly return accounts including or not token ones
   */
  private accountsNoToken?: Account[];

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    this.transport = transport;
    this.logger = logger;
  }

  /**
   * Connect to the Wallet app
   *
   * @remarks
   * Establish the connection with the Wallet app through the [[transport]] instance provided at initialization
   */
  connect({
    middlewares,
  }: {
    middlewares?: JSONRPCServerMiddleware<ServerParams>[];
  } = {}): void {
    const serverAndClient = new JSONRPCServerAndClient<ServerParams>(
      new JSONRPCServer<ServerParams>(),
      new JSONRPCClient((payload) => this.transport.send(payload))
    );
    if (middlewares) {
      serverAndClient.applyServerMiddleware(...middlewares);
    }

    this.transport.onMessage = (payload) =>
      serverAndClient.receiveAndSend(payload, { logger: this.logger });
    this.transport.connect();
    this.serverAndClient = serverAndClient;
    this.logger.log("connected", this.transport);

    this.serverAndClient.addMethod("currency.list", listCurrencies);
    this.serverAndClient.addMethod("account.list", listAccounts);
  }

  /**
   * Disconnect the server.
   */
  disconnect(): void {
    delete this.serverAndClient;
    this.transport.disconnect();
    this.logger.log("disconnected", this.transport);
  }

  /**
   * Adds an handler method to the server.
   */
  addMethod<M extends keyof MethodsHandlerMap>(
    method: M,
    handler: MethodsHandlerMap[M]
  ): void {
    if (!this.serverAndClient) {
      this.logger.error(`not connected - addMethod(${method})`);
      throw new Error("Client not connected");
    }

    // Should we check if the method is already added ?
    // this.serverAndClient.hasMethod(method);

    this.serverAndClient.addMethod(method, handler);
  }

  /**
   * Set the instance [[currencies]] object
   *
   * @param params.walletCurrencies - the list of all the currencies handled by
   * the wallet
   * @param params.allowedCurrenciesFilters - this list of allowed currencies
   * filters for a specific Wallet APP, extracted from it's `categories`
   * manifest field.
   * These filters must be glob
   * https://en.wikipedia.org/wiki/Glob_(programming)
   */
  setCurrencies({
    walletCurrencies,
    allowedCurrenciesFilters,
  }: {
    walletCurrencies: Currency[];
    allowedCurrenciesFilters: "*" | string[];
  }): void {
    // If the Wallet APP has access to all available currencies (i.e: no restriction)
    if (allowedCurrenciesFilters === "*") {
      this.currencies = walletCurrencies;
      return;
    }

    const filteredCurrencies = filterByCurrencies(
      walletCurrencies,
      allowedCurrenciesFilters,
      "id"
    );

    const filteredCurrenciesNoTokens = filteredCurrencies.filter(
      (currency) => currency.type === CurrencyType.CryptoCurrency
    );

    this.currencies = filteredCurrencies;
    this.currenciesNoToken = filteredCurrenciesNoTokens;
  }

  /**
   * Get the instance [[currencies]] object
   *
   * @returns The list of currencies available for the Wallet APP communicating
   * with this server instance.
   */
  getCurrencies(): Currency[] | undefined {
    return this.currencies;
  }

  /**
   * Set the instance [[accounts]] object
   *
   * @param params.walletAccounts - the list of all the accounts handled by
   * the wallet
   * @param params.allowedCurrenciesFilters - this list of allowed currencies
   * filters for a specific Wallet APP, extracted from it's `categories`
   * manifest field.
   * These filters must be glob
   * https://en.wikipedia.org/wiki/Glob_(programming)
   */
  setAccounts({
    walletAccounts,
    allowedCurrenciesFilters,
  }: {
    walletAccounts: Account[];
    allowedCurrenciesFilters: "*" | string[];
  }): void {
    if (!this.currencies) {
      throw new Error("must call `setCurrencies` before `setAccounts`");
    }

    const serverCurrencies = this.currencies;

    // If the Wallet APP has access to all available currencies (i.e: no restriction)
    if (allowedCurrenciesFilters === "*") {
      this.accounts = walletAccounts;
      return;
    }

    const filteredAccounts = filterByCurrencies(
      walletAccounts,
      allowedCurrenciesFilters,
      "currency"
    );

    const filteredAccountsNoTokens = filteredAccounts.filter((account) => {
      // TODO: we should store `currencies` in a Map to quicky access a currency by it's id
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      const currency = serverCurrencies.find((c) => c.id === account.currency);

      return currency?.type === CurrencyType.CryptoCurrency;
    });

    this.accounts = filteredAccounts;
    this.accountsNoToken = filteredAccountsNoTokens;
  }

  /**
   * Get the instance [[accounts]] object
   *
   * @returns The list of accounts available for the Wallet APP communicating
   * with this server instance.
   */
  getAccounts(): Account[] | undefined {
    return this.accounts;
  }
}

export * from "./middlewares";
