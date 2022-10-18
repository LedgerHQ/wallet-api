import { Account, Currency, JSONRPC, RFC } from "@ledgerhq/wallet-api-core";
import type { Observable, BehaviorSubject } from "rxjs";

export type WalletContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
};

export type RPCHandler<Result> = (
  request: JSONRPC.RpcRequest,
  context: WalletContext,
  handlers: Partial<WalletHandlers>,
) => Promise<Result>;

export interface WalletHandlers {
  [RFC.MethodId.ACCOUNT_REQUEST]: (params: {
    accounts$: Observable<Account[]>;
  }) => Promise<Account>;
  [RFC.MethodId.ACCOUNT_RECEIVE]: (params: {
    account: Account;
  }) => Promise<string>
  [RFC.MethodId.MESSAGE_SIGN]: (params: {
    account: Account;
    message: Buffer;
  }) => Promise<Buffer>;
}

export type RPCMiddleware = (
  next: () => Promise<void>,
  request: JSONRPC.RpcRequest,
  context: WalletContext,
) => Promise<void>;
