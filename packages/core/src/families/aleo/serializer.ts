import BigNumber from "bignumber.js";
import type { AleoTransaction, RawAleoTransaction } from "./types";

export function serializeAleoTransaction({
  amount,
  recipient,
  family,
  mode,
  fees,
}: AleoTransaction): RawAleoTransaction {
  return {
    amount: amount.toString(),
    recipient,
    family,
    mode,
    fees: fees.toString(),
  };
}

export function deserializeAleoTransaction({
  amount,
  recipient,
  family,
  mode,
  fees,
}: RawAleoTransaction): AleoTransaction {
  return {
    amount: new BigNumber(amount),
    recipient,
    family,
    mode,
    fees: new BigNumber(fees),
  };
}
