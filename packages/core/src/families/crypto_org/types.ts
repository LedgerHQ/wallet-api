import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export interface CryptoOrgTransaction extends TransactionCommon {
  readonly family: FAMILIES.CryptoOrg;
  mode: string;
  fees?: BigNumber;
}

export interface RawCryptoOrgTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.CryptoOrg;
  mode: string;
  fees?: string;
}
