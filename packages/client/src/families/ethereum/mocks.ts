import BigNumber from "bignumber.js";
import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { EthereumTransaction, RawEthereumTransaction } from "./types";

export const rawTx: RawEthereumTransaction = {
  ...rawTxCommon,
  family: FAMILIES.ETHEREUM,
};

export const rawTxFull: Required<RawEthereumTransaction> = {
  ...rawTx,
  nonce: 1,
  data: "44415441",
  gasPrice: "10",
  gasLimit: "100",
};

export const tx: EthereumTransaction = {
  ...txCommon,
  family: FAMILIES.ETHEREUM,
};

export const txFull: Required<EthereumTransaction> = {
  ...tx,
  nonce: 1,
  data: Buffer.from("44415441", "hex"),
  gasPrice: new BigNumber("10"),
  gasLimit: new BigNumber("100"),
};
