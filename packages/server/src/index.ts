import {
  MethodsHandlerMap,
  Transport,
  Currency,
  Logger,
} from "@ledgerhq/wallet-api-core";
import {
  JSONRPCClient,
  JSONRPCServer,
  JSONRPCServerAndClient,
  JSONRPCServerMiddleware,
} from "json-rpc-2.0";
import listCurrencies from "./handlers/listCurrencies";

const defaultLogger = new Logger("Wallet-API-Server");

export type ServerParams = {
  logger: Logger;
  currencies?: Currency[];
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
  addMethod<M extends Exclude<keyof MethodsHandlerMap, "currency.list">>(
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
   * These filters must be javascript compatible regex
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

    const filteredCurrencies = walletCurrencies.filter((currency) => {
      // Test if a specific currency is allowed based on provided filters
      return allowedCurrenciesFilters.some((filter) => {
        const re = new RegExp(filter);
        return currency.id.match(re);
      });
    });

    this.currencies = filteredCurrencies;
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
}

export * from "./middlewares";
