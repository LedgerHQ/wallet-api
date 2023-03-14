import BigNumber from "bignumber.js";
import type { RawNeoTransaction, NeoTransaction } from "./types";

export function serialize({
  amount,
  recipient,
  family,
}: NeoTransaction): RawNeoTransaction {
  return {
    amount: amount.toString(),
    recipient,
    family,
  };
}

export function deserialize({
  amount,
  recipient,
  family,
}: RawNeoTransaction): NeoTransaction {
  return {
    amount: new BigNumber(amount),
    recipient,
    family,
  };
}
