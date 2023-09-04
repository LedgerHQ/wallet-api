import {
  Account,
  AppHandlers,
  Currency,
  Logger,
  Permission,
  RpcError,
  RpcErrorCode,
  RpcNode,
  RpcRequest,
  ServerError,
  Transport,
  createPermissionDenied,
} from "@ledgerhq/wallet-api-core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { filterAccountsForCurrencies, matchCurrencies } from "./helpers";
import { internalHandlers } from "./internalHandlers";

import type { ServerConfig, WalletContext, WalletHandlers } from "./types";

const defaultLogger = new Logger("Wallet-API-Server");

export class WalletAPIServer extends RpcNode<
  typeof internalHandlers,
  AppHandlers
> {
  private logger: Logger;

  private walletContext: WalletContext;

  private allAccounts$: BehaviorSubject<Account[]> = new BehaviorSubject<
    Account[]
  >([]);

  private allCurrencies$: BehaviorSubject<Currency[]> = new BehaviorSubject<
    Currency[]
  >([]);

  private walletHandlers: Partial<WalletHandlers> = {};

  private permissions: {
    currencyIds$: BehaviorSubject<string[]>;
    methodIds$: BehaviorSubject<string[]>;
  } = {
    currencyIds$: new BehaviorSubject<string[]>([]),
    methodIds$: new BehaviorSubject<string[]>([]),
  };

  setPermissions(permission: Permission) {
    this.permissions.currencyIds$.next(permission.currencyIds);
    this.permissions.methodIds$.next(permission.methodIds);
    return this;
  }

  setCurrencies(currencies: Currency[]) {
    this.allCurrencies$.next(currencies);
    return this;
  }

  setAccounts(accounts: Account[]) {
    this.allAccounts$.next(accounts);
    return this;
  }

  setConfig(config: ServerConfig) {
    this.walletContext.config = config;
  }

  public setHandler<K extends keyof WalletHandlers>(
    methodName: K,
    method: WalletHandlers[K],
  ) {
    this.walletHandlers[methodName] = method;
    return this;
  }

  protected async onRequest(
    request: RpcRequest<string, unknown>,
  ): Promise<unknown> {
    const methodId = request.method as keyof typeof this.requestHandlers;

    const handler = this.requestHandlers[methodId];

    if (!handler) {
      this.logger.error(
        `no request handler found for methodId ${request.method}`,
      );
      throw new RpcError({
        code: RpcErrorCode.METHOD_NOT_FOUND,
        message: "method not found",
      });
    }

    const allowedMethodIds = new Set(this.permissions.methodIds$.getValue());

    if (!allowedMethodIds.has(methodId)) {
      throw new ServerError(createPermissionDenied(methodId));
    }

    return handler(request, this.walletContext, this.walletHandlers);
  }

  constructor(
    transport: Transport,
    config: ServerConfig,
    logger: Logger = defaultLogger,
  ) {
    super(transport, internalHandlers);
    this.logger = logger;

    const allowedCurrencies$ = new BehaviorSubject<Currency[]>([]);
    combineLatest(
      [this.allCurrencies$, this.permissions.currencyIds$],
      matchCurrencies,
    ).subscribe(allowedCurrencies$);

    const allowedAccounts$ = new BehaviorSubject<Account[]>([]);
    combineLatest(
      [this.allAccounts$, allowedCurrencies$],
      filterAccountsForCurrencies,
    ).subscribe(allowedAccounts$);

    this.walletContext = {
      currencies$: allowedCurrencies$,
      accounts$: allowedAccounts$,
      config,
    };

    this.walletContext.accounts$.subscribe(() => {
      this.notify("event.account.updated", undefined);
    });
  }
}
