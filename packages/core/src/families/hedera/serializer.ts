import BigNumber from "bignumber.js";
import type { HederaTransaction, RawHederaTransaction } from "./types";

export function serializeHederaTransaction({
  amount,
  family,
  memo = undefined,
  recipient,
}: HederaTransaction): RawHederaTransaction {
  return {
    amount: amount.toString(),
    family,
    memo,
    recipient,
  };
}

export function deserializeHederaTransaction({
  amount,
  family,
  memo = undefined,
  recipient,
}: RawHederaTransaction): HederaTransaction {
  return {
    amount: new BigNumber(amount),
    family,
    memo,
    recipient,
  };
}
