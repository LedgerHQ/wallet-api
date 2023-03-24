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
  deserializeHederaTransaction,
  serializeHederaTransaction,
} from "./hedera/serializer";
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

import type { RawTransaction, Transaction } from "./types";

/**
 * Serialize an [[Transaction]] object in order to send it over JSON-RPC
 * protocol to the Ledger Live platform
 * @param transaction - The transaction object to serialize
 *
 * @returns The raw representation of the provided transaction object
 */
export function serializeTransaction(transaction: Transaction): RawTransaction {
  switch (transaction.family) {
    case "ethereum":
      return serializeEthereumTransaction(transaction);
    case "bitcoin":
      return serializeBitcoinTransaction(transaction);
    case "algorand":
      return serializeAlgorandTransaction(transaction);
    case "crypto_org":
      return serializeCryptoOrgTransaction(transaction);
    case "ripple":
      return serializeRippleTransaction(transaction);
    case "cosmos":
      return serializeCosmosTransaction(transaction);
    case "hedera":
      return serializeHederaTransaction(transaction);
    case "tezos":
      return serializeTezosTransaction(transaction);
    case "polkadot":
      return serializePolkadotTransaction(transaction);
    case "stellar":
      return serializeStellarTransaction(transaction);
    case "tron":
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
    case "ethereum":
      return deserializeEthereumTransaction(rawTransaction);
    case "bitcoin":
      return deserializeBitcoinTransaction(rawTransaction);
    case "algorand":
      return deserializeAlgorandTransaction(rawTransaction);
    case "crypto_org":
      return deserializeCryptoOrgTransaction(rawTransaction);
    case "ripple":
      return deserializeRippleTransaction(rawTransaction);
    case "cosmos":
      return deserializeCosmosTransaction(rawTransaction);
    case "hedera":
      return deserializeHederaTransaction(rawTransaction);
    case "tezos":
      return deserializeTezosTransaction(rawTransaction);
    case "polkadot":
      return deserializePolkadotTransaction(rawTransaction);
    case "stellar":
      return deserializeStellarTransaction(rawTransaction);
    case "tron":
      return deserializeTronTransaction(rawTransaction);
    default: {
      const exhaustiveCheck: never = rawTransaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
      // throw new Error("Can't deserialize transaction: family not supported");
    }
  }
}
