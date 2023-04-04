import BigNumber from "bignumber.js";
import type { ElrondTransaction, RawElrondTransaction } from "./types";

export function serializeElrondTransaction({
  amount,
  data,
  family,
  fees,
  gasLimit,
  mode,
  recipient,
}: ElrondTransaction): RawElrondTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    mode,
    fees: fees ? fees.toString() : undefined,
    data,
    gasLimit,
  };
}

export function deserializeElrondTransaction({
  amount,
  data,
  family,
  fees,
  gasLimit,
  mode,
  recipient,
}: RawElrondTransaction): ElrondTransaction {
  return {
    family,
    mode,
    amount: new BigNumber(amount),
    recipient,
    fees: fees ? new BigNumber(fees) : undefined,
    data,
    gasLimit,
  };
}
