import { z } from "zod";
import { schemaRawAlgorandTransaction } from "./algorand/validation";
import { schemaRawBitcoinTransaction } from "./bitcoin/validation";
import { schemaRawCardanoTransaction } from "./cardano/validation";
import { schemaRawCeloTransaction } from "./celo/validation";
import { schemaRawCosmosTransaction } from "./cosmos/validation";
import { schemaRawCryptoOrgTransaction } from "./crypto_org/validation";
import { schemaRawElrondTransaction } from "./elrond/validation";
import { schemaRawEthereumTransaction } from "./ethereum/validation";
import { schemaRawEvmTransaction } from "./evm/validation";
import { schemaRawFilecoinTransaction } from "./filecoin/validation";
import { schemaRawHederaTransaction } from "./hedera/validation";
import { schemaRawNearTransaction } from "./near/validation";
import { schemaRawNeoTransaction } from "./neo/validation";
import { schemaRawRippleTransaction } from "./ripple/validation";
import { schemaRawPolkadotTransaction } from "./polkadot/validation";
import { schemaRawSolanaTransaction } from "./solana/validation";
import { schemaRawStellarTransaction } from "./stellar/validation";
import { schemaRawTezosTransaction } from "./tezos/validation";
import { schemaRawTronTransaction } from "./tron/validation";

export const schemaRawTransaction = z.discriminatedUnion("family", [
  schemaRawAlgorandTransaction,
  schemaRawBitcoinTransaction,
  schemaRawCardanoTransaction,
  schemaRawCeloTransaction,
  schemaRawCosmosTransaction,
  schemaRawCryptoOrgTransaction,
  schemaRawElrondTransaction,
  schemaRawEthereumTransaction,
  schemaRawEvmTransaction,
  schemaRawHederaTransaction,
  schemaRawFilecoinTransaction,
  schemaRawNearTransaction,
  schemaRawPolkadotTransaction,
  schemaRawNeoTransaction,
  schemaRawRippleTransaction,
  schemaRawSolanaTransaction,
  schemaRawStellarTransaction,
  schemaRawTezosTransaction,
  schemaRawTronTransaction,
]);
