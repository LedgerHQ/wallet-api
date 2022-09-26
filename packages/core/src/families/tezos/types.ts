import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export type TezosOperationMode = "send" | "delegate" | "undelegate";

export interface TezosTransaction extends TransactionCommon {
  readonly family: FAMILIES.Tezos;
  mode: TezosOperationMode;
  fees?: BigNumber;
  gasLimit?: BigNumber;
}

export interface RawTezosTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Tezos;
  mode: TezosOperationMode;
  fees?: string;
  gasLimit?: string;
}
