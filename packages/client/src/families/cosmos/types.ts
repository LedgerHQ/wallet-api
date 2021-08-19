import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export type CosmosOperationMode =
  | "send"
  | "delegate"
  | "undelegate"
  | "redelegate"
  | "claimReward"
  | "claimRewardCompound";

export interface CosmosTransaction extends TransactionCommon {
  readonly family: FAMILIES.COSMOS;
  mode: CosmosOperationMode;
  fees?: BigNumber;
  gas?: BigNumber;
  memo?: string;
}

export interface RawCosmosTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.COSMOS;
  mode: CosmosOperationMode;
  fees?: string;
  gas?: string;
  memo?: string;
}
