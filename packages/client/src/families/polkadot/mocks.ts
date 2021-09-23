import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { PolkadotTransaction, RawPolkadotTransaction } from "./types";

export const rawTx: RawPolkadotTransaction = {
  ...rawTxCommon,
  family: FAMILIES.POLKADOT,
  mode: "send",
};

export const rawTxFull: Required<RawPolkadotTransaction> = {
  ...rawTx,
  fee: "10",
  era: 1,
};

export const tx: PolkadotTransaction = {
  ...txCommon,
  family: FAMILIES.POLKADOT,
  mode: "send",
};

export const txFull: Required<PolkadotTransaction> = {
  ...tx,
  fee: new BigNumber("10"),
  era: 1,
};
