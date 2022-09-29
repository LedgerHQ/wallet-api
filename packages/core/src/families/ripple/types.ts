import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export interface RippleTransaction extends TransactionCommon {
  readonly family: FAMILIES.Ripple;
  fee?: BigNumber;
  tag: number;
}

export interface RawRippleTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Ripple;
  fee?: string;
  tag: number;
}
