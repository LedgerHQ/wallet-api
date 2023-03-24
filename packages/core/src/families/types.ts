import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { AlgorandTransaction } from "./algorand/types";
import type { BitcoinTransaction } from "./bitcoin/types";
import type { schemaFamilies } from "./common";
import type { CosmosTransaction } from "./cosmos/types";
import type { CryptoOrgTransaction } from "./crypto_org/types";
import type { EthereumTransaction } from "./ethereum/types";
import type { HederaTransaction } from "./hedera/types";
import type { PolkadotTransaction } from "./polkadot/types";
import type { RippleTransaction } from "./ripple/types";
import type { StellarTransaction } from "./stellar/types";
import type { TezosTransaction } from "./tezos/types";
import type { TronTransaction } from "./tron/types";
import type { schemaRawTransaction } from "./validation";

/**
 * Supported coin families
 */
export type Families = z.infer<typeof schemaFamilies>;
/**
 * The raw representation of the common transaction fields found in [[TransactionCommon]] type
 *
 * @see [[TransactionCommon]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[TransactionCommon]] type
 */
export type RawTransactionCommon = z.infer<typeof schemaRawTransaction>;

/**
 * Common fields for all cryptocurrency transactions
 */
export interface TransactionCommon {
  /**
   * The family of the transaction
   */
  family: Families;
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
export type RawTransaction = z.infer<typeof schemaRawTransaction>;

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
  | HederaTransaction
  | RippleTransaction
  | CosmosTransaction
  | TezosTransaction
  | PolkadotTransaction
  | StellarTransaction
  | TronTransaction;
