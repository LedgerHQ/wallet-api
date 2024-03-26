import BigNumber from "bignumber.js";
import type { RawVechainTransaction, VechainTransaction } from "./types";

export const serializeVechainTransaction = ({
  amount,
  recipient,
  family,
  estimatedFees,
  body,
}: VechainTransaction): RawVechainTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  estimatedFees,
  body,
});

export const deserializeVechainTransaction = ({
  amount,
  recipient,
  family,
  estimatedFees,
  body,
}: RawVechainTransaction): VechainTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  estimatedFees,
  body,
});
