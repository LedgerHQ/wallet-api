import BigNumber from "bignumber.js";
import type { RawStellarTransaction, StellarTransaction } from "./types";

export const serializeStellarTransaction = ({
  amount,
  recipient,
  family,
  fees,
  memoType,
  memoValue,
}: StellarTransaction): RawStellarTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  fees: fees ? fees.toString() : undefined,
  memoType,
  memoValue,
});

export const deserializeStellarTransaction = ({
  amount,
  recipient,
  family,
  fees,
  memoType,
  memoValue,
}: RawStellarTransaction): StellarTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fees: fees ? new BigNumber(fees) : undefined,
  memoType,
  memoValue,
});
