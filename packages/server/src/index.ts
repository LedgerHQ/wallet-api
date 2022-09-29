import type { MethodsHandlerMap, Transport } from "@ledgerhq/wallet-api-core";
import { Logger } from "@ledgerhq/wallet-api-core";
import {
  JSONRPCClient,
  JSONRPCServer,
  JSONRPCServerAndClient,
  JSONRPCServerMiddleware,
} from "json-rpc-2.0";

const defaultLogger = new Logger("Wallet-API-Server");

export type ServerParams = {
  logger: Logger;
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
}

export * from "./middlewares";
