import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export type TronOperationMode =
  | "send"
  | "freeze"
  | "unfreeze"
  | "vote"
  | "claimReward";

export type TronResource = "BANDWIDTH" | "ENERGY";

export interface TronTransaction extends TransactionCommon {
  readonly family: FAMILIES.TRON;
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
}

export interface RawTronTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.TRON;
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
}
