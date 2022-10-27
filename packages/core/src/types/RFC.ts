/*
    Request Payloads
*/

import type { RawAccount } from "../accounts/types";
import type { Currency } from "../currencies/types";
import type { RawTransaction } from "../families";

export enum MethodId {
  ACCOUNT_REQUEST = "account.request",
  ACCOUNT_RECEIVE = "account.receive",
  ACCOUNT_LIST = "account.list",
  CURRENCY_LIST = "currency.list",
  EXCHANGE_COMPLETE = "exchange.complete",
  EXCHANGE_START = "exchange.start",
  MESSAGE_SIGN = "message.sign",
  TRANSACTION_SIGN_AND_BROADCAST = "transaction.signAndBroadcast",
  TRANSACTION_SIGN = "transaction.sign",

  EVENT_ACCOUNT_UPDATED = "event.account.updated",
  EVENT_CURRENCY_UPDATED = "event.currency.updated",
}

/*
    account.request
*/

export type AccountRequestParams = {
  currencyIds: string[];
};

export type AccountRequestResult = {
  rawAccount: RawAccount;
};

/*
    account.list
*/

export type AccountListParams = {
  currencyIds: string[];
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
    transaction.signAndBroadcast
*/

export type TransactionSignAndBroadcastParams = {
  accountId: string;
  rawTransaction: RawTransaction;
  options: TransactionOptions;
};

export type TransactionSignAndBroadcastResult = {
  transactionHash: string;
};

/*
export type MethodsHandlerMap = {
  "exchange.complete": () => void;
  "exchange.start": () => void;
};
*/
