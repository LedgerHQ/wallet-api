import type {
  AccountListHandler,
  AccountReceiveHandler,
  AccountRequestHandler,
  CurrencyListHandler,
  MessageSignHandler,
  TransactionSignAndBroadcastHandler,
  TransactionSignHandler,
} from "../types";

export interface WalletHandlers {
  "transaction.sign": TransactionSignHandler;
  "transaction.signAndBroadcast": TransactionSignAndBroadcastHandler;
  "account.list": AccountListHandler;
  "message.sign": MessageSignHandler;
  "account.request": AccountRequestHandler;
  "account.receive": AccountReceiveHandler;
  "currency.list": CurrencyListHandler;
}
