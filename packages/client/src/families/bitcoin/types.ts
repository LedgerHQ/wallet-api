import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface BitcoinTransaction extends TransactionCommon {
  family: FAMILIES.BITCOIN;
  feePerByte?: BigNumber;
}

export interface RawBitcoinTransaction extends RawTransactionCommon {
  family: FAMILIES.BITCOIN;
  feePerByte?: string;
}
