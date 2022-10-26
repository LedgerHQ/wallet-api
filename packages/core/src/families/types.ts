import type BigNumber from "bignumber.js";
import type {
  AlgorandTransaction,
  RawAlgorandTransaction,
} from "./algorand/types";
import type {
  BitcoinTransaction,
  RawBitcoinTransaction,
} from "./bitcoin/types";
import type { CosmosTransaction, RawCosmosTransaction } from "./cosmos/types";
import type {
  CryptoOrgTransaction,
  RawCryptoOrgTransaction,
} from "./crypto_org/types";
import type {
  EthereumTransaction,
  RawEthereumTransaction,
} from "./ethereum/types";
import type {
  PolkadotTransaction,
  RawPolkadotTransaction,
} from "./polkadot/types";
import type { RawRippleTransaction, RippleTransaction } from "./ripple/types";
import type {
  RawStellarTransaction,
  StellarTransaction,
} from "./stellar/types";
import type { RawTezosTransaction, TezosTransaction } from "./tezos/types";
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
