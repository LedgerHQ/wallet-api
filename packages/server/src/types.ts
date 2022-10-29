import type {
  Account,
  Currency,
  RFC,
  RpcRequest,
  Transaction,
} from "@ledgerhq/wallet-api-core";
import type { Observable, BehaviorSubject } from "rxjs";

export type WalletContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
};

export type RPCHandler<Result> = (
  request: RpcRequest,
  context: WalletContext,
  handlers: Partial<WalletHandlers>
) => Promise<Result>;

export type RPCHandler2<TParams, TResult> = (
  request: RpcRequest<RFC.MethodId, TParams>,
  context: WalletContext,
  handlers: Partial<WalletHandlers>
) => Promise<TResult>;

export interface WalletHandlers {
  "account.request": (params: {
    currencies$: Observable<Currency[]>;
    accounts$: Observable<Account[]>;
  }) => Promise<Account>;
  "account.receive": (params: { account: Account }) => Promise<string>;
  "message.sign": (params: {
    account: Account;
    message: Buffer;
  }) => Promise<Buffer>;
  "transaction.sign": (params: {
    account: Account;
    transaction: Transaction;
    options: RFC.TransactionOptions | undefined;
  }) => Promise<Buffer>;
  "transaction.signAndBroadcast": (params: {
    account: Account;
    transaction: Transaction;
    options: RFC.TransactionOptions | undefined;
  }) => Promise<string>;
}

export type RPCMiddleware = (
  next: () => Promise<void>,
  request: RpcRequest,
  context: WalletContext
) => Promise<void>;

type ReturnTypeOfMethod<T> = T extends (...args: Array<any>) => any
  ? ReturnType<T>
  : any;
type ReturnTypeOfMethodIfExists<T, S> = S extends keyof T
  ? ReturnTypeOfMethod<T[S]>
  : any;
type MethodParams<T> = T extends (...args: infer P) => any ? P[0] : T;
type MethodParamsIfExists<T, S> = S extends keyof T ? MethodParams<T[S]> : S;

export type TransformHandler<T> = {
  [K in keyof T]: RPCHandler2<
    MethodParamsIfExists<T, K>,
    ReturnTypeOfMethodIfExists<T, K>
  >;
};

export interface ClientHandlers {
  "transaction.sign": (
    params: RFC.TransactionSignParams
  ) => RFC.TransactionSignResult;
  "transaction.signAndBroadcast": (
    params: RFC.TransactionSignAndBroadcastParams
  ) => RFC.TransactionSignAndBroadcastResult;
  "account.list": (params: RFC.AccountListParams) => RFC.AccountListResult;
  "message.sign": (params: RFC.MessageSignParams) => RFC.MessageSignResult;
  "account.request": (
    params: RFC.AccountRequestParams
  ) => RFC.AccountRequestResult;
  "account.receive": (
    params: RFC.AccountReceiveParams
  ) => RFC.AccountReceiveResult;
  "currency.list": (params: RFC.CurrencyListParams) => RFC.CurrencyListResult;
}
