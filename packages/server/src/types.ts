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
