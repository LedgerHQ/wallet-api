import {
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
  [RFC.MethodId.ACCOUNT_REQUEST]: (params: {
    currencies$: Observable<Currency[]>;
    accounts$: Observable<Account[]>;
  }) => Promise<Account>;
  [RFC.MethodId.ACCOUNT_RECEIVE]: (params: {
    account: Account;
  }) => Promise<string>;
  [RFC.MethodId.MESSAGE_SIGN]: (params: {
    account: Account;
    message: Buffer;
  }) => Promise<Buffer>;
  [RFC.MethodId.TRANSACTION_SIGN]: (params: {
    account: Account;
    transaction: Transaction;
    options: RFC.TransactionOptions;
  }) => Promise<Buffer>;
  [RFC.MethodId.TRANSACTION_SIGN_AND_BROADCAST]: (params: {
    account: Account;
    transaction: Transaction;
    options: RFC.TransactionOptions;
  }) => Promise<Buffer>;
}

export type RPCMiddleware = (
  next: () => Promise<void>,
  request: RpcRequest,
  context: WalletContext
) => Promise<void>;
