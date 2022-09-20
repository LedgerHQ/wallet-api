import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../../index";

export interface RippleTransaction extends TransactionCommon {
  readonly family: FAMILIES.RIPPLE;
  fee?: BigNumber;
  tag: number;
}

export interface RawRippleTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.RIPPLE;
  fee?: string;
  tag: number;
}
