import type BigNumber from "bignumber.js";
import {
  deserializeAlgorandTransaction,
  serializeAlgorandTransaction,
} from "./algorand/serializer";
import type {
  AlgorandTransaction,
  RawAlgorandTransaction,
} from "./algorand/types";
import {
  deserializeBitcoinTransaction,
  serializeBitcoinTransaction,
} from "./bitcoin/serializer";
import type {
  BitcoinTransaction,
  RawBitcoinTransaction,
} from "./bitcoin/types";
import {
  deserializeCosmosTransaction,
  serializeCosmosTransaction,
} from "./cosmos/serializer";
import type { CosmosTransaction, RawCosmosTransaction } from "./cosmos/types";
import {
  deserializeCryptoOrgTransaction,
  serializeCryptoOrgTransaction,
} from "./crypto_org/serializer";
import type {
  CryptoOrgTransaction,
  RawCryptoOrgTransaction,
} from "./crypto_org/types";
import {
  deserializeEthereumTransaction,
  serializeEthereumTransaction,
} from "./ethereum/serializer";
import type {
  EthereumTransaction,
  RawEthereumTransaction,
} from "./ethereum/types";
import {
  deserializePolkadotTransaction,
  serializePolkadotTransaction,
} from "./polkadot/serializer";
import type {
  PolkadotTransaction,
  RawPolkadotTransaction,
} from "./polkadot/types";
import {
  deserializeRippleTransaction,
  serializeRippleTransaction,
} from "./ripple/serializer";
import type { RawRippleTransaction, RippleTransaction } from "./ripple/types";
import {
  deserializeStellarTransaction,
  serializeStellarTransaction,
} from "./stellar/serializer";
import type {
  RawStellarTransaction,
  StellarTransaction,
} from "./stellar/types";
import {
  deserializeTezosTransaction,
  serializeTezosTransaction,
} from "./tezos/serializer";
import type { RawTezosTransaction, TezosTransaction } from "./tezos/types";
import {
  deserializeTronTransaction,
  serializeTronTransaction,
} from "./tron/serializer";
import type { RawTronTransaction, TronTransaction } from "./tron/types";

/**
 * Supported coin families
 */
export enum FAMILIES {
  Bitcoin = "bitcoin",
  Ethereum = "ethereum",
  Algorand = "algorand",
  CryptoOrg = "crypto_org",
  Ripple = "ripple",
  Cosmos = "cosmos",
  Tezos = "tezos",
  Polkadot = "polkadot",
  Stellar = "stellar",
  Tron = "tron",
}

/**
 * The raw representation of the common transaction fields found in [[TransactionCommon]] type
 *
 * @see [[TransactionCommon]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[TransactionCommon]] type
 */
export interface RawTransactionCommon {
  family: string;
  amount: string;
  recipient: string;
}

/**
 * Common fields for all cryptocurrency transactions
 */
export interface TransactionCommon {
  /**
   * The family of the transaction
   */
  family: FAMILIES;
  /**
   * The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
   * For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC
   */
  amount: BigNumber;
  /**
   * The address of the transaction's recipient
   */
  recipient: string;
}

/**
 * The raw representation of the generic [[Transaction]] type.
 */
export type RawTransaction =
  | RawEthereumTransaction
  | RawBitcoinTransaction
  | RawAlgorandTransaction
  | RawCryptoOrgTransaction
  | RawRippleTransaction
  | RawCosmosTransaction
  | RawTezosTransaction
  | RawPolkadotTransaction
  | RawStellarTransaction
  | RawTronTransaction;

/**
 * Description of an unsigned transaction. This type is used to build
 * transactions and then sign them with a Ledger device and finally broadcast
 * them to the network upon user validation.
 */
export type Transaction =
  | EthereumTransaction
  | BitcoinTransaction
  | AlgorandTransaction
  | CryptoOrgTransaction
  | RippleTransaction
  | CosmosTransaction
  | TezosTransaction
  | PolkadotTransaction
  | StellarTransaction
  | TronTransaction;

/**
 * Serialize an [[Transaction]] object in order to send it over JSON-RPC
 * protocol to the Ledger Live platform
 * @param transaction - The transaction object to serialize
 *
 * @returns The raw representation of the provided transaction object
 */
export function serializeTransaction(transaction: Transaction): RawTransaction {
  switch (transaction.family) {
    case FAMILIES.Ethereum:
      return serializeEthereumTransaction(transaction);
    case FAMILIES.Bitcoin:
      return serializeBitcoinTransaction(transaction);
    case FAMILIES.Algorand:
      return serializeAlgorandTransaction(transaction);
    case FAMILIES.CryptoOrg:
      return serializeCryptoOrgTransaction(transaction);
    case FAMILIES.Ripple:
      return serializeRippleTransaction(transaction);
    case FAMILIES.Cosmos:
      return serializeCosmosTransaction(transaction);
    case FAMILIES.Tezos:
      return serializeTezosTransaction(transaction);
    case FAMILIES.Polkadot:
      return serializePolkadotTransaction(transaction);
    case FAMILIES.Stellar:
      return serializeStellarTransaction(transaction);
    case FAMILIES.Tron:
      return serializeTronTransaction(transaction);
    default: {
      const exhaustiveCheck: never = transaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
      // throw new Error("Can't serialize transaction: family not supported");
    }
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
    case FAMILIES.Ethereum:
      return deserializeEthereumTransaction(rawTransaction);
    case FAMILIES.Bitcoin:
      return deserializeBitcoinTransaction(rawTransaction);
    case FAMILIES.Algorand:
      return deserializeAlgorandTransaction(rawTransaction);
    case FAMILIES.CryptoOrg:
      return deserializeCryptoOrgTransaction(rawTransaction);
    case FAMILIES.Ripple:
      return deserializeRippleTransaction(rawTransaction);
    case FAMILIES.Cosmos:
      return deserializeCosmosTransaction(rawTransaction);
    case FAMILIES.Tezos:
      return deserializeTezosTransaction(rawTransaction);
    case FAMILIES.Polkadot:
      return deserializePolkadotTransaction(rawTransaction);
    case FAMILIES.Stellar:
      return deserializeStellarTransaction(rawTransaction);
    case FAMILIES.Tron:
      return deserializeTronTransaction(rawTransaction);
    default: {
      const exhaustiveCheck: never = rawTransaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
      // throw new Error("Can't deserialize transaction: family not supported");
    }
  }
}

export * from "./algorand/types";
export * from "./bitcoin/types";
export * from "./cosmos/types";
export * from "./crypto_org/types";
export * from "./ethereum/types";
export * from "./polkadot/types";
export * from "./ripple/types";
export * from "./stellar/types";
export * from "./tezos/types";
export * from "./tron/types";
