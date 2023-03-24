import BigNumber from "bignumber.js";
import type { CeloTransaction, RawCeloTransaction } from "./types";

export function serializeCeloTransaction({
  amount,
  family,
  fees = undefined,
  index = undefined,
  mode,
  recipient,
}: CeloTransaction): RawCeloTransaction {
  return {
    amount: amount.toString(),
    family,
    fees: fees ? fees.toString() : undefined,
    index,
    mode,
    recipient,
  };
}

export function deserializeCeloTransaction({
  amount,
  family,
  fees = undefined,
  index = undefined,
  mode,
  recipient,
}: RawCeloTransaction): CeloTransaction {
  return {
    amount: new BigNumber(amount),
    family,
    fees: fees ? new BigNumber(fees) : undefined,
    index,
    mode,
    recipient,
  };
}
