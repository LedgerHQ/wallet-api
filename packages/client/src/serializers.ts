import type {
  Account,
  RawAccount,
  RawTransaction,
  Transaction,
} from "@ledgerhq/wallet-api-types";
import {
  deserializeAlgorandTransaction,
  deserializeBitcoinTransaction,
  deserializeCosmosTransaction,
  deserializeCryptoOrgTransaction,
  deserializeEthereumTransaction,
  deserializePolkadotTransaction,
  deserializeRippleTransaction,
  deserializeStellarTransaction,
  deserializeTezosTransaction,
  deserializeTronTransaction,
  FAMILIES,
  serializeAlgorandTransaction,
  serializeBitcoinTransaction,
  serializeCosmosTransaction,
  serializeCryptoOrgTransaction,
  serializeEthereumTransaction,
  serializePolkadotTransaction,
  serializeRippleTransaction,
  serializeStellarTransaction,
  serializeTezosTransaction,
  serializeTronTransaction,
} from "@ledgerhq/wallet-api-types";
import BigNumber from "bignumber.js";

/**
 * Serialize an [[Account]] object in order to send it over JSON-RPC protocol
 * to the Ledger Live platform
 * @param account - The account object to serialize
 *
 * @returns The raw representation of the provided account object
 */

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
    lastSyncDate: lastSyncDate.toISOString(),
  };
}

/**
 * Deserialize a [[RawAccount]] object after it has been received over JSON-RPC
 * protocol from the Ledger Live platform
 * @param rawAccount - The raw account representation to deserialize
 *
 * @returns The object account of the provided raw account representation
 */
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

/**
 * Serialize an [[Transaction]] object in order to send it over JSON-RPC
 * protocol to the Ledger Live platform
 * @param transaction - The transaction object to serialize
 *
 * @returns The raw representation of the provided transaction object
 */
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
    case FAMILIES.TEZOS:
      return serializeTezosTransaction(transaction);
    case FAMILIES.POLKADOT:
      return serializePolkadotTransaction(transaction);
    case FAMILIES.STELLAR:
      return serializeStellarTransaction(transaction);
    case FAMILIES.TRON:
      return serializeTronTransaction(transaction);
    default:
      throw new Error("Can't serialize transaction: family not supported");
  }
}

/**
 * Deserialize a [[RawTransaction]] object after it has been received over
 * JSON-RPC protocol from the Ledger Live platform
 * @param rawTransaction - The raw transaction representation to deserialize
 *
 * @returns The object transaction of the provided raw transaction representation
 */
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
    case FAMILIES.TEZOS:
      return deserializeTezosTransaction(rawTransaction);
    case FAMILIES.POLKADOT:
      return deserializePolkadotTransaction(rawTransaction);
    case FAMILIES.STELLAR:
      return deserializeStellarTransaction(rawTransaction);
    case FAMILIES.TRON:
      return deserializeTronTransaction(rawTransaction);
    default:
      throw new Error("Can't deserialize transaction: family not supported");
  }
}
