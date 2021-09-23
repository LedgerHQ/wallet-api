import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { RawTezosTransaction, TezosTransaction } from "./types";

export const rawTx: RawTezosTransaction = {
  ...rawTxCommon,
  family: FAMILIES.TEZOS,
  mode: "send",
};

export const rawTxFull: Required<RawTezosTransaction> = {
  ...rawTx,
  fees: "10",
  mode: "send",
  gasLimit: "100",
};

export const tx: TezosTransaction = {
  ...txCommon,
  family: FAMILIES.TEZOS,
  mode: "send",
};

export const txFull: Required<TezosTransaction> = {
  ...tx,
  fees: new BigNumber("10"),
  gasLimit: new BigNumber("100"),
  mode: "send",
};
