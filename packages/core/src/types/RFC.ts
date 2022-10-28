/*
    Request Payloads
*/

import type { RawAccount } from "../accounts/types";
import type { Currency } from "../currencies/types";
import type { RawTransaction } from "../families";

export type MethodId =
  | "account.request"
  | "account.receive"
  | "account.list"
  | "currency.list"
  | "message.sign"
  | "transaction.signAndBroadcast"
  | "transaction.sign"
  | "event.account.updated"
  | "event.currency.updated";

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
  hwAppId: string | undefined;
};

export type TransactionSignParams = {
  accountId: string;
  rawTransaction: RawTransaction;
  options: TransactionOptions | undefined;
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
  options: TransactionOptions | undefined;
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
