import {
  Account,
  Currency,
  Logger,
  Transport,
  JSONRPC,
} from "@ledgerhq/wallet-api-core";
import { internalHandlers } from "./internalHandlers";

import type {
  WalletContext,
  WalletHandlers,
  RPCMiddleware,
} from "./types";
import { BehaviorSubject } from "rxjs";

const defaultLogger = new Logger("Wallet-API-Server");

export default class WalletAPIServer {
  private transport: Transport;

  private logger: Logger;

  private middlewares: RPCMiddleware[] = [];

  private walletContext: WalletContext = {
    currencies$: new BehaviorSubject<Currency[]>([]),
    accounts$: new BehaviorSubject<Account[]>([]),
  };

  private walletHandlers: Partial<WalletHandlers> = {};

  private async handleMessage(payload: unknown) {
    // TODO validate JSONRPC request
    const rpcRequest = payload as JSONRPC.RpcRequest;
    if (rpcRequest.method in internalHandlers) {
      const methodId = rpcRequest.method as keyof typeof internalHandlers;
      try {
        const internalHandler = internalHandlers[methodId];

        // await this.runMiddlewares();
        const result = await internalHandler(rpcRequest, this.walletContext, this.walletHandlers)

        if (rpcRequest.id) {
          const response: JSONRPC.RpcResponse<typeof result> = {
            id: rpcRequest.id,
            jsonrpc: "2.0",
            result,
          }
          await this.transport.send(response);
        }
      } catch (error) {
        if (error instanceof JSONRPC.RpcError) {
          await this.transport.send({
            id: rpcRequest.id,
            jsonrpc: "2.0",
            error: {
              code: error.getCode(),
              message: error.message,
              data: error.getData(),
            },
          });
        }
        this.logger.error("error: ", error);
      }
    } else {
      this.logger.error("unknown method: ", rpcRequest.method);
      // unknown method
    }
  }

  setCurrencies(currencies: Currency[]) {
    this.walletContext.currencies$.next(currencies);
    return this;
  }

  setAccounts(accounts: Account[]) {
    this.walletContext.accounts$.next(accounts);
    return this;
  }

  use(middleware: RPCMiddleware) {
    this.middlewares.push(middleware);
    return this;
  }

  public setHandler<K extends keyof WalletHandlers>(
    methodName: K,
    method: WalletHandlers[K]
  ) {
    this.walletHandlers[methodName] = method;
    return this;
  }

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    this.transport = transport;
    this.logger = logger;

    this.transport.onMessage = this.handleMessage.bind(this);
  }
}
