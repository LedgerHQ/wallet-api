import BigNumber from "bignumber.js";
import type { RawNearTransaction, NearTransaction } from "./types";

export function serialize({
  amount,
  recipient,
  family,
  mode,
  fees,
}: NearTransaction): RawNearTransaction {
  return {
    amount: amount.toString(),
    recipient,
    family,
    mode,
    fees: fees?.toString(),
  };
}

export function deserialize({
  amount,
  recipient,
  family,
  mode,
  fees,
}: RawNearTransaction): NearTransaction {
  return {
    amount: new BigNumber(amount),
    recipient,
    family,
    mode,
    fees: fees ? new BigNumber(fees) : undefined,
  };
}
