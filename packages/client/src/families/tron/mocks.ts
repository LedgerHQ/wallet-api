import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { RawTronTransaction, TronTransaction } from "./types";

export const rawTx: RawTronTransaction = {
  ...rawTxCommon,
  family: FAMILIES.TRON,
  mode: "send",
};

export const rawTxFull: Required<RawTronTransaction> = {
  ...rawTx,
  mode: "send",
  resource: "BANDWIDTH",
  duration: 1,
};

export const tx: TronTransaction = {
  ...txCommon,
  family: FAMILIES.TRON,
  mode: "send",
};

export const txFull: Required<TronTransaction> = {
  ...tx,
  mode: "send",
  resource: "BANDWIDTH",
  duration: 1,
};
