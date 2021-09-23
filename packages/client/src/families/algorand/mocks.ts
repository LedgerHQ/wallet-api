import BigNumber from "bignumber.js";

import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { AlgorandTransaction, RawAlgorandTransaction } from "./types";

export const rawTx: RawAlgorandTransaction = {
  ...rawTxCommon,
  family: FAMILIES.ALGORAND,
  mode: "send",
};

export const rawTxFull: Required<RawAlgorandTransaction> = {
  ...rawTx,
  fees: "1",
  assetId: "[ASSET_ID]",
  memo: "[MEMO]",
};

export const tx: AlgorandTransaction = {
  ...txCommon,
  family: FAMILIES.ALGORAND,
  mode: "send",
};

export const txFull: Required<AlgorandTransaction> = {
  ...tx,
  fees: new BigNumber(1),
  assetId: "[ASSET_ID]",
  memo: "[MEMO]",
};
