/*
    Request Payloads
*/

import type { Currency, RawAccount } from ".";
import type { RawTransaction } from "../families";

export enum MethodId {
  ACCOUNT_REQUEST = "account.request",
  ACCOUNT_RECEIVE = "account.receive",
  ACCOUNT_LIST = "account.list",
  CURRENCY_LIST = "currency.list",
  EXCHANGE_COMPLETE = "exchange.complete",
  EXCHANGE_START = "exchange.start",
  MESSAGE_SIGN = "message.sign",
  TRANSACTION_BROADCAST = "transaction.broadcast",
  TRANSACTION_SIGN = "transaction.sign",
}

/*
    account.request
*/

export type AccountRequestParams = {
  currencies: string[];
};

export type AccountRequestResult = {
  rawAccount: RawAccount;
};

/*
    account.list
*/

export type AccountListParams = {
  currencies: string[];
};

export type AccountListResult = {
  rawAccounts: RawAccount[];
};

/*
    account.receive
*/

export type AccountReceiveParams = {
  accountId: string;
};

export type AccountReceiveResult = {
  address: string;
};

/*
    currency.list
*/

export type CurrencyListParams = {
  currencyIds: string[];
};

export type CurrencyListResult = {
  currencies: Currency[];
};

/*
    message.sign
*/

export type MessageSignParams = {
  accountId: string;
  hexMessage: string;
};

export type MessageSignResult = {
  hexSignedMessage: string;
};

/*
    transaction.sign
*/

export type TransactionOptions = {
  hwAppId?: string;
};

export type TransactionSignParams = {
  accountId: string;
  rawTransaction: RawTransaction;
  options: TransactionOptions;
};

export type TransactionSignResult = {
  signedTransactionHex: string;
};

/*
    transaction.send
*/

export type TransactionSendParams = {
  accountId: string;
  rawTransaction: RawTransaction;
  options: TransactionOptions;
};

export type TransactionSendResult = {
  transactionHash: string;
};

/*
export type MethodsHandlerMap = {
  "exchange.complete": () => void;
  "exchange.start": () => void;
};
*/
