import type { WalletHandlers } from "@ledgerhq/wallet-api-core";
import type { TransformHandler } from "../types";
import * as account from "./account";
import * as bitcoin from "./bitcoin";
import * as currency from "./currency";
import * as device from "./device";
import * as exchange from "./exchange";
import * as message from "./message";
import * as storage from "./storage";
import * as transaction from "./transaction";
import * as wallet from "./wallet";

type InternalHandlers = TransformHandler<WalletHandlers>;

export const internalHandlers = {
  "account.request": account.request,
  "account.list": account.list,
  "account.receive": account.receive,

  "currency.list": currency.list,

  "device.close": device.close,
  "device.exchange": device.exchange,
  "device.open": device.open,
  "device.select": device.select,
  "device.transport": device.transport,

  "message.sign": message.sign,

  "transaction.sign": transaction.sign,
  "transaction.signRaw": transaction.signRaw,
  "transaction.signAndBroadcast": transaction.signAndBroadcast,

  "wallet.capabilities": wallet.capabilities,
  "wallet.userId": wallet.userId,
  "wallet.info": wallet.info,

  "storage.set": storage.set,
  "storage.get": storage.get,

  "bitcoin.getAddress": bitcoin.getAddress,
  "bitcoin.getPublicKey": bitcoin.getPublicKey,
  "bitcoin.getXPub": bitcoin.getXPub,
  "bitcoin.signPsbt": bitcoin.signPsbt,

  "exchange.start": exchange.start,
  "exchange.complete": exchange.complete,
} as const satisfies InternalHandlers;

export { customWrapper } from "./custom";
