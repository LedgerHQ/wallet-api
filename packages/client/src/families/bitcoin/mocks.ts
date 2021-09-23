import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { BitcoinTransaction, RawBitcoinTransaction } from "./types";

export const rawTx: RawBitcoinTransaction = {
  ...rawTxCommon,
  family: FAMILIES.BITCOIN,
};

export const rawTxFull: Required<RawBitcoinTransaction> = {
  ...rawTx,
  feePerByte: "10",
};

export const tx: BitcoinTransaction = {
  ...txCommon,
  family: FAMILIES.BITCOIN,
};

export const txFull: Required<BitcoinTransaction> = {
  ...tx,
  feePerByte: new BigNumber(10),
};
