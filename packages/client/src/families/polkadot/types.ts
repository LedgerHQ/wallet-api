import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

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
  readonly family: FAMILIES.POLKADOT;
  mode: PolkadotOperationMode;
  fee?: BigNumber;
  era?: number;
}

export interface RawPolkadotTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.POLKADOT;
  mode: PolkadotOperationMode;
  fee?: string;
  era?: number;
}
