import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { RawRippleTransaction, RippleTransaction } from "./types";

export const rawTx: RawRippleTransaction = {
  ...rawTxCommon,
  family: FAMILIES.RIPPLE,
  tag: 1,
};

export const rawTxFull: Required<RawRippleTransaction> = {
  ...rawTx,
  fee: "10",
  tag: 1,
};

export const tx: RippleTransaction = {
  ...txCommon,
  family: FAMILIES.RIPPLE,
  tag: 1,
};

export const txFull: Required<RippleTransaction> = {
  ...tx,
  fee: new BigNumber("10"),
  tag: 1,
};
