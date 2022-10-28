import type { RFC } from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";
import * as account from "./account";
import * as currency from "./currency";
import * as message from "./message";
import * as transaction from "./transaction";

type InternalHandlers = Record<RFC.MethodId, RPCHandler<unknown>>;

export const internalHandlers: Partial<InternalHandlers> = {
  "account.request": account.request,
  "account.list": account.list,
  "account.receive": account.receive,

  "currency.list": currency.list,

  "message.sign": message.sign,

  "transaction.sign": transaction.sign,
  "transaction.signAndBroadcast": transaction.signAndBroadcast,
};
