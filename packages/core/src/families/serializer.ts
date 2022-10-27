import {
  deserializeAlgorandTransaction,
  serializeAlgorandTransaction,
} from "./algorand/serializer";
import {
  deserializeBitcoinTransaction,
  serializeBitcoinTransaction,
} from "./bitcoin/serializer";
import {
  deserializeCosmosTransaction,
  serializeCosmosTransaction,
} from "./cosmos/serializer";
import {
  deserializeCryptoOrgTransaction,
  serializeCryptoOrgTransaction,
} from "./crypto_org/serializer";
import {
  deserializeEthereumTransaction,
  serializeEthereumTransaction,
} from "./ethereum/serializer";
import {
  deserializePolkadotTransaction,
  serializePolkadotTransaction,
} from "./polkadot/serializer";
import {
  deserializeRippleTransaction,
  serializeRippleTransaction,
} from "./ripple/serializer";
import {
  deserializeStellarTransaction,
  serializeStellarTransaction,
} from "./stellar/serializer";
import {
  deserializeTezosTransaction,
  serializeTezosTransaction,
} from "./tezos/serializer";
import {
  deserializeTronTransaction,
  serializeTronTransaction,
} from "./tron/serializer";

import { FAMILIES, RawTransaction, Transaction } from "./types";

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
