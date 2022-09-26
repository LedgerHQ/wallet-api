import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export type TronOperationMode =
  | "send"
  | "freeze"
  | "unfreeze"
  | "vote"
  | "claimReward";

export type TronResource = "BANDWIDTH" | "ENERGY";

export interface TronTransaction extends TransactionCommon {
  readonly family: FAMILIES.Tron;
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
}

export interface RawTronTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Tron;
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
}
