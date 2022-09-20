import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../../index";

export type AlgorandOperationMode = "send" | "optIn" | "claimReward" | "optOut";

export interface AlgorandTransaction extends TransactionCommon {
  readonly family: FAMILIES.ALGORAND;
  mode: AlgorandOperationMode;
  fees?: BigNumber;
  assetId?: string;
  memo?: string;
}

export interface RawAlgorandTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.ALGORAND;
  mode: AlgorandOperationMode;
  fees?: string;
  assetId?: string;
  memo?: string;
}
