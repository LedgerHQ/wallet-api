import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export type PolkadotOperationMode =
  | "send"
  | "bond"
  | "unbond"
  | "rebond"
  | "withdrawUnbonded"
  | "setController"
  | "nominate"
  | "chill"
  | "claimReward";

export interface PolkadotTransaction extends TransactionCommon {
  readonly family: FAMILIES.Polkadot;
  mode: PolkadotOperationMode;
  fee?: BigNumber;
  era?: number;
}

export interface RawPolkadotTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Polkadot;
  mode: PolkadotOperationMode;
  fee?: string;
  era?: number;
}
