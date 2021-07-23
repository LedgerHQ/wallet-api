import BigNumber from "bignumber.js";
import {
  deserializeBitcoinTransaction,
  serializeBitcoinTransaction,
} from "./families/bitcoin/serializer";
import {
  deserializeEthereumTransaction,
  serializeEthereumTransaction,
} from "./families/ethereum/serializer";
import FAMILIES from "./families/types";

import type {
  RawAccount,
  RawSignedTransaction,
  RawTransaction,
} from "./rawTypes";
import type { Account, SignedTransaction, Transaction } from "./types";

export function deserializeAccount({
  id,
  name,
  address,
  currency,
  balance,
  spendableBalance,
  blockHeight,
  lastSyncDate,
}: RawAccount): Account {
  return {
    id,
    name,
    address,
    currency,
    balance: new BigNumber(balance),
    spendableBalance: new BigNumber(spendableBalance),
    blockHeight,
    lastSyncDate: new Date(lastSyncDate),
  };
}

export function serializeTransaction(transaction: Transaction): RawTransaction {
  switch (transaction.family) {
    case FAMILIES.ETHEREUM:
      return serializeEthereumTransaction(transaction);
    case FAMILIES.BITCOIN:
      return serializeBitcoinTransaction(transaction);
    default:
      throw new Error("Can't serialize transaction: family not supported");
  }
}

export function deserializeTransaction(
  rawTransaction: RawTransaction
): Transaction {
  switch (rawTransaction.family) {
    case FAMILIES.ETHEREUM:
      return deserializeEthereumTransaction(rawTransaction);
    case FAMILIES.BITCOIN:
      return deserializeBitcoinTransaction(rawTransaction);
    default:
      throw new Error("Can't deserialize transaction: family not supported");
  }
}

export function serializeSignedTransaction({
  operation,
  signature,
  expirationDate,
  signatureRaw,
}: SignedTransaction): RawSignedTransaction {
  return {
    operation,
    signature,
    expirationDate: expirationDate ? expirationDate.toString() : null,
    signatureRaw,
  };
}

export function deserializeSignedTransaction({
  operation,
  signature,
  expirationDate,
  signatureRaw,
}: RawSignedTransaction): SignedTransaction {
  return {
    operation: operation || {},
    signature,
    expirationDate: expirationDate ? new Date(expirationDate) : null,
    signatureRaw,
  };
}
