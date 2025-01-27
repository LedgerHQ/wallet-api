import BigNumber from "bignumber.js";
import type { AptosTransaction, RawAptosTransaction } from "./types";

export const serializeAptosTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: AptosTransaction): RawAptosTransaction => ({
  family,
  amount: amount.toString(),
  recipient,
  fees: fees ? fees.toString() : undefined,
  mode,
});

export const deserializeAptosTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: RawAptosTransaction): AptosTransaction => ({
  family,
  amount: new BigNumber(amount),
  recipient,
  fees: fees ? new BigNumber(fees) : undefined,
  mode,
});
