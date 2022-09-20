import type {
  RawAlgorandTransaction,
  RawBitcoinTransaction,
  RawCosmosTransaction,
  RawCryptoOrgTransaction,
  RawEthereumTransaction,
  RawPolkadotTransaction,
  RawRippleTransaction,
  RawStellarTransaction,
  RawTezosTransaction,
  RawTronTransaction,
} from "./families";

/**
 * The raw representation of the [[Account]] type
 *
 * @see [[Account]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[Account]] type
 */
export type RawAccount = {
  id: string;
  name: string;
  address: string;
  currency: string;
  balance: string;
  spendableBalance: string;
  blockHeight: number;
  lastSyncDate: string;
};

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
 * The raw representation of a signed transaction returned by the Ledger Live platform
 *
 * @remarks
 * This type is returned by Ledger Live when signing with [[signTransaction]] and is only used as a payload by the [[broadcastSignedTransaction]] function to actually broadcast the transaction to the blockchain
 */
export type RawSignedTransaction = {
  operation: unknown;
  signature: string;
  signatureRaw?: unknown;
  expirationDate: string | null;
};
