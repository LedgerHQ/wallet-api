import BigNumber from "bignumber.js";
import { AlgorandTransaction, RawAlgorandTransaction } from "./types";

export const serializeAlgorandTransaction = ({
  family,
  mode,
  fees,
  assetId,
  memo,
  amount,
  recipient,
}: AlgorandTransaction): RawAlgorandTransaction => {
  return {
    family,
    amount: amount.toString(),
    recipient,
    fees: fees ? fees.toString() : undefined,
    memo,
    mode,
    assetId,
  };
};

export const deserializeAlgorandTransaction = ({
  family,
  mode,
  fees,
  assetId,
  memo,
  amount,
  recipient,
}: RawAlgorandTransaction): AlgorandTransaction => {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    fees: fees ? new BigNumber(fees) : undefined,
    memo,
    mode,
    assetId,
  };
};
