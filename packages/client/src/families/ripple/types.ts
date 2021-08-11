import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface RippleTransaction extends TransactionCommon {
  family: FAMILIES.RIPPLE;
  fee?: BigNumber;
  tag: number;
}

export interface RawRippleTransaction extends RawTransactionCommon {
  family: FAMILIES.RIPPLE;
  fee?: string;
  tag: number;
}
