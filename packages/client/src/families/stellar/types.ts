import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface StellarTransaction extends TransactionCommon {
  family: FAMILIES.STELLAR;
  fees?: BigNumber;
  memoType?: string;
  memoValue?: string;
}

export interface RawStellarTransaction extends RawTransactionCommon {
  family: FAMILIES.STELLAR;
  fees?: string;
  memoType?: string;
  memoValue?: string;
}
