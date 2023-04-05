import BigNumber from "bignumber.js";
import type { CardanoTransaction, RawCardanoTransaction } from "./types";

export function serializeCardanoTransaction({
  amount,
  family,
  fees,
  memo,
  mode,
  recipient,
}: CardanoTransaction): RawCardanoTransaction {
  return {
    amount: amount.toString(),
    family,
    fees: fees ? fees.toString() : undefined,
    memo,
    mode,
    recipient,
  };
}

export function deserializeCardanoTransaction({
  amount,
  family,
  fees,
  memo,
  mode,
  recipient,
}: RawCardanoTransaction): CardanoTransaction {
  return {
    amount: new BigNumber(amount),
    family,
    fees: fees ? new BigNumber(fees) : undefined,
    memo,
    mode,
    recipient,
  };
}
