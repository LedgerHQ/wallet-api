import type {
  AccountListHandler,
  AccountReceiveHandler,
  AccountRequestHandler,
  AccountSelectedHandler,
  BitcoinGetXPubHandler,
  CurrencyListHandler,
  DeviceCloseHandler,
  DeviceExchangeHandler,
  DeviceTransportHandler,
  MessageSignHandler,
  StorageGetHandler,
  StorageSetHandler,
  TransactionSignAndBroadcastHandler,
  TransactionSignHandler,
  WalletCapabilitiesHandler,
  WalletInfoHandler,
  WalletUserIdHandler,
} from "../types";

export interface WalletHandlers {
  "account.list": AccountListHandler;
  "account.receive": AccountReceiveHandler;
  "account.request": AccountRequestHandler;
  "account.selected": AccountSelectedHandler;
  "currency.list": CurrencyListHandler;
  "device.close": DeviceCloseHandler;
  "device.exchange": DeviceExchangeHandler;
  "device.transport": DeviceTransportHandler;
  "message.sign": MessageSignHandler;
  "transaction.sign": TransactionSignHandler;
  "transaction.signAndBroadcast": TransactionSignAndBroadcastHandler;
  "storage.set": StorageSetHandler;
  "storage.get": StorageGetHandler;
  "bitcoin.getXPub": BitcoinGetXPubHandler;
  "wallet.capabilities": WalletCapabilitiesHandler;
  "wallet.userId": WalletUserIdHandler;
  "wallet.info": WalletInfoHandler;
}
