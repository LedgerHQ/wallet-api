import { taggedUnionOf } from "@altostra/type-validations";
import { isRawAlgorandTransaction } from "./algorand/validation";
import { isRawBitcoinTransaction } from "./bitcoin/validation";
import { isRawCosmosTransaction } from "./cosmos/validation";
import { isRawCryptoOrgTransaction } from "./crypto_org/validation";
import { isRawEthereumTransaction } from "./ethereum/validation";
import { isRawPolkadotTransaction } from "./polkadot/validation";
import { isRawRippleTransaction } from "./ripple/validation";
import { isRawStellarTransaction } from "./stellar/validation";
import { isRawTezosTransaction } from "./tezos/validation";
import { isRawTronTransaction } from "./tron/validation";

export const isRawTransaction = taggedUnionOf("family", {
  algorand: isRawAlgorandTransaction,
  bitcoin: isRawBitcoinTransaction,
  cosmos: isRawCosmosTransaction,
  crypto_org: isRawCryptoOrgTransaction,
  ethereum: isRawEthereumTransaction,
  polkadot: isRawPolkadotTransaction,
  ripple: isRawRippleTransaction,
  stellar: isRawStellarTransaction,
  tezos: isRawTezosTransaction,
  tron: isRawTronTransaction,
});
