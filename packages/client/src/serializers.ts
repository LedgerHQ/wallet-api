import BigNumber from "bignumber.js";
import {
  deserializeAlgorandTransaction,
  serializeAlgorandTransaction,
} from "./families/algorand/serializer";
import {
  deserializeBitcoinTransaction,
  serializeBitcoinTransaction,
} from "./families/bitcoin/serializer";
import {
  deserializeCosmosTransaction,
  serializeCosmosTransaction,
} from "./families/cosmos/serializer";
import {
  deserializeCryptoOrgTransaction,
  serializeCryptoOrgTransaction,
} from "./families/crypto_org/serializer";
import {
  deserializeEthereumTransaction,
  serializeEthereumTransaction,
} from "./families/ethereum/serializer";
import {
  deserializeRippleTransaction,
  serializeRippleTransaction,
} from "./families/ripple/serializer";
import FAMILIES from "./families/types";

import type {
  RawAccount,
  RawSignedTransaction,
  RawTransaction,
} from "./rawTypes";
import type { Account, SignedTransaction, Transaction } from "./types";

export function serializeAccount({
  id,
  name,
  address,
  currency,
  balance,
  spendableBalance,
  blockHeight,
  lastSyncDate,
}: Account): RawAccount {
  return {
    id,
    name,
    address,
    currency,
    balance: balance.toString(),
    spendableBalance: spendableBalance.toString(),
    blockHeight,
    lastSyncDate: lastSyncDate.toString(),
  };
}

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
    case FAMILIES.ALGORAND:
      return serializeAlgorandTransaction(transaction);
    case FAMILIES.CRYPTO_ORG:
      return serializeCryptoOrgTransaction(transaction);
    case FAMILIES.RIPPLE:
      return serializeRippleTransaction(transaction);
    case FAMILIES.COSMOS:
      return serializeCosmosTransaction(transaction);
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
    case FAMILIES.ALGORAND:
      return deserializeAlgorandTransaction(rawTransaction);
    case FAMILIES.CRYPTO_ORG:
      return deserializeCryptoOrgTransaction(rawTransaction);
    case FAMILIES.RIPPLE:
      return deserializeRippleTransaction(rawTransaction);
    case FAMILIES.COSMOS:
      return deserializeCosmosTransaction(rawTransaction);
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
