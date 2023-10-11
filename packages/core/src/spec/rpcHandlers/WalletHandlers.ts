import type {
  AccountListHandler,
  AccountReceiveHandler,
  AccountRequestHandler,
  BitcoinGetXPubHandler,
  CurrencyListHandler,
  CustomRequestHandler,
  DeviceCloseHandler,
  DeviceExchangeHandler,
  DeviceOpenHandler,
  DeviceSelectHandler,
  DeviceTransportHandler,
  ExchangeCompleteHandler,
  ExchangeStartHandler,
  MessageSignHandler,
  StorageGetHandler,
  StorageSetHandler,
  TransactionSignAndBroadcastHandler,
  TransactionSignHandler,
  WalletCapabilitiesHandler,
  WalletInfoHandler,
  WalletUserIdHandler,
} from "../types";

export type UnknownCustomHandlers = Record<
  `custom.${string}`,
  CustomRequestHandler<unknown, unknown>
>;

export type WalletHandlers<GenericCustomHandlers = UnknownCustomHandlers> = {
  "account.list": AccountListHandler;
  "account.receive": AccountReceiveHandler;
  "account.request": AccountRequestHandler;
  "currency.list": CurrencyListHandler;
  "device.close": DeviceCloseHandler;
  "device.exchange": DeviceExchangeHandler;
  "device.open": DeviceOpenHandler;
  "device.select": DeviceSelectHandler;
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
  "exchange.start": ExchangeStartHandler;
  "exchange.complete": ExchangeCompleteHandler;
} & GenericCustomHandlers;
