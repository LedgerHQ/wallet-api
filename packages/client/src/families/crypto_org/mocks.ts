import BigNumber from "bignumber.js";

import { rawTxCommon, txCommon } from "../../mock/transactionCommon";
import FAMILIES from "../types";
import { CryptoOrgTransaction, RawCryptoOrgTransaction } from "./types";

export const rawTx: RawCryptoOrgTransaction = {
  ...rawTxCommon,
  family: FAMILIES.CRYPTO_ORG,
  mode: "send",
};

export const rawTxFull: Required<RawCryptoOrgTransaction> = {
  ...rawTx,
  fees: "10",
};

export const tx: CryptoOrgTransaction = {
  ...txCommon,
  family: FAMILIES.CRYPTO_ORG,
  mode: "send",
};

export const txFull: Required<CryptoOrgTransaction> = {
  ...tx,
  fees: new BigNumber(10),
};
