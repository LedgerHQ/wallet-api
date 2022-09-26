import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export type CosmosOperationMode =
  | "send"
  | "delegate"
  | "undelegate"
  | "redelegate"
  | "claimReward"
  | "claimRewardCompound";

export interface CosmosTransaction extends TransactionCommon {
  readonly family: FAMILIES.Cosmos;
  mode: CosmosOperationMode;
  fees?: BigNumber;
  gas?: BigNumber;
  memo?: string;
}

export interface RawCosmosTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Cosmos;
  mode: CosmosOperationMode;
  fees?: string;
  gas?: string;
  memo?: string;
}
