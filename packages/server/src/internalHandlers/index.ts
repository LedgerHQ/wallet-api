import type { WalletHandlers } from "@ledgerhq/wallet-api-core";
import type { TransformHandler } from "../types";
import * as account from "./account";
import * as currency from "./currency";
import * as device from "./device";
import * as message from "./message";
import * as transaction from "./transaction";
import * as wallet from "./wallet";
import * as storage from "./storage";
import * as bitcoin from "./bitcoin";

type InternalHandlers = TransformHandler<WalletHandlers>;

export const internalHandlers: InternalHandlers = {
  "account.request": account.request,
  "account.list": account.list,
  "account.receive": account.receive,

  "currency.list": currency.list,

  "device.close": device.close,
  "device.exchange": device.exchange,
  "device.transport": device.transport,

  "message.sign": message.sign,

  "transaction.sign": transaction.sign,
  "transaction.signAndBroadcast": transaction.signAndBroadcast,

  "wallet.capabilities": wallet.capabilities,
  "wallet.userId": wallet.userId,
  "wallet.info": wallet.info,

  "storage.set": storage.set,
  "storage.get": storage.get,
  "bitcoin.getXPub": bitcoin.getXPub,
};
