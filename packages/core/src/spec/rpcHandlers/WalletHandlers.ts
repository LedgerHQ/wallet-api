import type {
  AccountListHandler,
  AccountReceiveHandler,
  AccountRequestHandler,
  CurrencyListHandler,
  DeviceCloseHandler,
  DeviceExchangeHandler,
  DeviceTransportHandler,
  MessageSignHandler,
  TransactionSignAndBroadcastHandler,
  TransactionSignHandler,
  WalletCapabilitiesHandler,
} from "../types";

export interface WalletHandlers {
  "account.list": AccountListHandler;
  "account.receive": AccountReceiveHandler;
  "account.request": AccountRequestHandler;
  "currency.list": CurrencyListHandler;
  "device.close": DeviceCloseHandler;
  "device.exchange": DeviceExchangeHandler;
  "device.transport": DeviceTransportHandler;
  "message.sign": MessageSignHandler;
  "transaction.sign": TransactionSignHandler;
  "transaction.signAndBroadcast": TransactionSignAndBroadcastHandler;
  "wallet.capabilities": WalletCapabilitiesHandler;
}
