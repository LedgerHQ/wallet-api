import type {
  Account,
  Currency,
  RpcRequest,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
} from "@ledgerhq/wallet-api-core";
import type { Observable, BehaviorSubject } from "rxjs";

export type WalletContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
};

export type RPCHandler<TResult> = (
  request: RpcRequest<string, unknown>,
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
    options?: TransactionSign["params"]["options"];
  }) => Promise<Buffer>;
  "transaction.signAndBroadcast": (params: {
    account: Account;
    transaction: Transaction;
    options?: TransactionSignAndBroadcast["params"]["options"];
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

export type TransformHandler<T> = {
  [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K>>;
};
