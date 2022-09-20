import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../../index";

export interface CryptoOrgTransaction extends TransactionCommon {
  readonly family: FAMILIES.CRYPTO_ORG;
  mode: string;
  fees?: BigNumber;
}

export interface RawCryptoOrgTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.CRYPTO_ORG;
  mode: string;
  fees?: string;
}
