import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { CosmosTransaction, RawCosmosTransaction } from "./types";

export const rawTx: RawCosmosTransaction = {
  ...rawTxCommon,
  family: FAMILIES.COSMOS,
  mode: "send",
};

export const rawTxFull: Required<RawCosmosTransaction> = {
  ...rawTx,
  fees: "10",
  gas: "100",
  memo: "[MEMO]",
};

export const tx: CosmosTransaction = {
  ...txCommon,
  family: FAMILIES.COSMOS,
  mode: "send",
};

export const txFull: Required<CosmosTransaction> = {
  ...tx,
  fees: new BigNumber(10),
  gas: new BigNumber(100),
  memo: "[MEMO]",
};
