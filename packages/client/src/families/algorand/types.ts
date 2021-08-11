import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export type AlgorandOperationMode = "send" | "optIn" | "claimReward" | "optOut";

export interface AlgorandTransaction extends TransactionCommon {
  family: FAMILIES.ALGORAND;
  mode: AlgorandOperationMode;
  fees?: BigNumber;
  assetId?: string;
  memo?: string;
}

export interface RawAlgorandTransaction extends RawTransactionCommon {
  family: FAMILIES.ALGORAND;
  mode: AlgorandOperationMode;
  fees?: string;
  assetId?: string;
  memo?: string;
}
