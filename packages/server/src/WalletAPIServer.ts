import {
  Account,
  Currency,
  Logger,
  Transport,
  RpcNode,
  RpcRequest,
  RpcError,
  RpcErrorCode,
  RFC,
} from "@ledgerhq/wallet-api-core";
import { BehaviorSubject } from "rxjs";
import { internalHandlers } from "./internalHandlers";

import type { WalletContext, WalletHandlers, RPCMiddleware } from "./types";

const defaultLogger = new Logger("Wallet-API-Server");

export class WalletAPIServer extends RpcNode<typeof internalHandlers> {
  private logger: Logger;

  private middlewares: RPCMiddleware[] = [];

  private walletContext: WalletContext = {
    currencies$: new BehaviorSubject<Currency[]>([]),
    accounts$: new BehaviorSubject<Account[]>([]),
  };

  private walletHandlers: Partial<WalletHandlers> = {};

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

  protected handleRpcRequest(
    request: RpcRequest<string, unknown>
  ): Promise<unknown> {
    const handler =
      this.requestHandlers[request.method as keyof typeof this.requestHandlers];

    if (!handler) {
      this.logger.error(
        `no request handler found for methodId ${request.method}`
      );
      throw new RpcError({
        code: RpcErrorCode.METHOD_NOT_FOUND,
        message: "method not found",
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return handler(request, this.walletContext, this.walletHandlers);
  }

  private connect() {
    this.walletContext.accounts$.subscribe(() => {
      this.notify(RFC.MethodId.EVENT_ACCOUNT_UPDATED);
    });
  }

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, internalHandlers);
    this.logger = logger;
    this.connect();
  }
}
