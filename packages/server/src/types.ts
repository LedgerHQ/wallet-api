import type {
  Account,
  Currency,
  Promisable,
  RFC,
  RpcRequest,
  Transaction,
} from "@ledgerhq/wallet-api-core";
import type { BehaviorSubject, Observable } from "rxjs";

export type WalletContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
};

export type RPCHandler<Result> = (
  request: RpcRequest,
  context: WalletContext,
  handlers: Partial<WalletHandlers>
) => Promise<Result>;

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
    options: RFC.TransactionOptions | undefined;
  }) => Promisable<Buffer>;
  "transaction.signAndBroadcast": (params: {
    account: Account;
    transaction: Transaction;
    options: RFC.TransactionOptions | undefined;
  }) => Promisable<string>;
}

export type RPCMiddleware = (
  next: () => Promise<void>,
  request: RpcRequest,
  context: WalletContext
) => Promise<void>;
