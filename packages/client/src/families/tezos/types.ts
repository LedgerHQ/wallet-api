import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export type TezosOperationMode = "send" | "delegate" | "undelegate";

export interface TezosTransaction extends TransactionCommon {
  family: FAMILIES.TEZOS;
  mode: TezosOperationMode;
  fees?: BigNumber;
  gasLimit?: BigNumber;
}

export interface RawTezosTransaction extends RawTransactionCommon {
  family: FAMILIES.TEZOS;
  mode: TezosOperationMode;
  fees?: string;
  gasLimit?: string;
}
