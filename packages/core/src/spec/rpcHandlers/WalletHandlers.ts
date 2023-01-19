import type {
  AccountListHandler,
  AccountReceiveHandler,
  AccountRequestHandler,
  BitcoinGetXPubHandler,
  CurrencyListHandler,
  DeviceCloseHandler,
  DeviceExchangeHandler,
  DeviceTransportHandler,
  MessageSignHandler,
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
  "currency.list": CurrencyListHandler;
  "device.close": DeviceCloseHandler;
  "device.exchange": DeviceExchangeHandler;
  "device.transport": DeviceTransportHandler;
  "message.sign": MessageSignHandler;
  "transaction.sign": TransactionSignHandler;
  "transaction.signAndBroadcast": TransactionSignAndBroadcastHandler;
  "bitcoin.getXPub": BitcoinGetXPubHandler;
  "wallet.capabilities": WalletCapabilitiesHandler;
  "wallet.userId": WalletUserIdHandler;
  "wallet.info": WalletInfoHandler;
}
