import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../../index";

export interface StellarTransaction extends TransactionCommon {
  readonly family: FAMILIES.STELLAR;
  fees?: BigNumber;
  memoType?: string;
  memoValue?: string;
}

export interface RawStellarTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.STELLAR;
  fees?: string;
  memoType?: string;
  memoValue?: string;
}
