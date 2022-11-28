import type {
  Account,
  Currency,
  Promisable,
  RpcRequest,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
} from "@ledgerhq/wallet-api-core";
import type { BehaviorSubject, Observable } from "rxjs";

export type WalletContext = {
  currencies$: Observable<Currency[]>;
  accounts$: Observable<Account[]>;
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
  }) => Promisable<Account>;
  "account.receive": (params: { account: Account }) => Promisable<string>;
  "message.sign": (params: {
    account: Account;
    message: Buffer;
  }) => Promisable<Buffer>;
  "transaction.sign": (params: {
    account: Account;
    transaction: Transaction;
    options?: TransactionSign["params"]["options"];
  }) => Promisable<Buffer>;
  "transaction.signAndBroadcast": (params: {
    account: Account;
    transaction: Transaction;
    options?: TransactionSignAndBroadcast["params"]["options"];
  }) => Promisable<string>;
  "device.close": (params: { transportId: string }) => Promisable<string>;
  "device.exchange": (params: {
    transportId: string;
    apduHex: string;
  }) => Promisable<string>;
  "device.transport": (params: {
    appName?: string | undefined;
  }) => Promisable<string>;
}

type ReturnTypeOfMethod<T> = T extends (...args: Array<unknown>) => unknown
  ? ReturnType<T>
  : unknown;
type ReturnTypeOfMethodIfExists<T, S> = S extends keyof T
  ? ReturnTypeOfMethod<T[S]>
  : unknown;

export type TransformHandler<T> = {
  [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K>>;
};

export type ClientParams = {
  id: string;
  permissions: {
    currencies: string[];
    methods: string[];
  };
};

export type ClientContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
} & ClientParams;
