import {
  deserializeAlgorandTransaction,
  serializeAlgorandTransaction,
} from "./algorand/serializer";
import {
  deserializeBitcoinTransaction,
  serializeBitcoinTransaction,
} from "./bitcoin/serializer";
import {
  deserializeCardanoTransaction,
  serializeCardanoTransaction,
} from "./cardano/serializer";
import {
  deserializeCeloTransaction,
  serializeCeloTransaction,
} from "./celo/serializer";
import {
  deserializeCosmosTransaction,
  serializeCosmosTransaction,
} from "./cosmos/serializer";
import {
  deserializeCryptoOrgTransaction,
  serializeCryptoOrgTransaction,
} from "./crypto_org/serializer";
import {
  deserializeElrondTransaction,
  serializeElrondTransaction,
} from "./elrond/serializer";
import {
  deserializeEthereumTransaction,
  serializeEthereumTransaction,
} from "./ethereum/serializer";
import * as evm from "./evm/serializer";
import {
  deserializeHederaTransaction,
  serializeHederaTransaction,
} from "./hedera/serializer";
import {
  deserializeFilecoinTransaction,
  serializeFilecoinTransaction,
} from "./filecoin/serializer";
import * as near from "./near/serializer";
import * as neo from "./neo/serializer";
import {
  deserializePolkadotTransaction,
  serializePolkadotTransaction,
} from "./polkadot/serializer";
import {
  deserializeRippleTransaction,
  serializeRippleTransaction,
} from "./ripple/serializer";
import {
  deserializeSolanaTransaction,
  serializeSolanaTransaction,
} from "./solana/serializer";
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
    case "algorand":
      return serializeAlgorandTransaction(transaction);
    case "bitcoin":
      return serializeBitcoinTransaction(transaction);
    case "cardano":
      return serializeCardanoTransaction(transaction);
    case "celo":
      return serializeCeloTransaction(transaction);
    case "cosmos":
      return serializeCosmosTransaction(transaction);
    case "crypto_org":
      return serializeCryptoOrgTransaction(transaction);
    case "elrond":
      return serializeElrondTransaction(transaction);
    case "ethereum":
      return serializeEthereumTransaction(transaction);
    case "evm":
      return evm.serialize(transaction);
    case "filecoin":
      return serializeFilecoinTransaction(transaction);
    case "hedera":
      return serializeHederaTransaction(transaction);
    case "near":
      return near.serialize(transaction);
    case "neo":
      return neo.serialize(transaction);
    case "polkadot":
      return serializePolkadotTransaction(transaction);
    case "ripple":
      return serializeRippleTransaction(transaction);
    case "stellar":
      return serializeStellarTransaction(transaction);
    case "solana":
      return serializeSolanaTransaction(transaction);
    case "tezos":
      return serializeTezosTransaction(transaction);
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
    case "algorand":
      return deserializeAlgorandTransaction(rawTransaction);
    case "bitcoin":
      return deserializeBitcoinTransaction(rawTransaction);
    case "cardano":
      return deserializeCardanoTransaction(rawTransaction);
    case "celo":
      return deserializeCeloTransaction(rawTransaction);
    case "cosmos":
      return deserializeCosmosTransaction(rawTransaction);
    case "crypto_org":
      return deserializeCryptoOrgTransaction(rawTransaction);
    case "elrond":
      return deserializeElrondTransaction(rawTransaction);
    case "ethereum":
      return deserializeEthereumTransaction(rawTransaction);
    case "evm":
      return evm.deserialize(rawTransaction);
    case "filecoin":
      return deserializeFilecoinTransaction(rawTransaction);
    case "hedera":
      return deserializeHederaTransaction(rawTransaction);
    case "near":
      return near.deserialize(rawTransaction);
    case "neo":
      return neo.deserialize(rawTransaction);
    case "polkadot":
      return deserializePolkadotTransaction(rawTransaction);
    case "ripple":
      return deserializeRippleTransaction(rawTransaction);
    case "stellar":
      return deserializeStellarTransaction(rawTransaction);
    case "solana":
      return deserializeSolanaTransaction(rawTransaction);
    case "tezos":
      return deserializeTezosTransaction(rawTransaction);
    case "tron":
      return deserializeTronTransaction(rawTransaction);
    default: {
      const exhaustiveCheck: never = rawTransaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
      // throw new Error("Can't deserialize transaction: family not supported");
    }
  }
}
