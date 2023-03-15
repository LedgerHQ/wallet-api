import BigNumber from "bignumber.js";
import type { ElrondTransaction, RawElrondTransaction } from "./types";

export function serializeElrondTransaction({
  family,
  mode,
  amount,
  recipient,
  fees,
  data,
  gasLimit,
}: ElrondTransaction): RawElrondTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    mode,
    fees: fees ? fees.toString() : undefined,
    data: data ? data.toString("hex") : undefined,
    gasLimit: gasLimit ? gasLimit.toString() : undefined,
  };
}

export function deserializeElrondTransaction({
  family,
  mode,
  amount,
  recipient,
  fees,
  data,
  gasLimit,
}: RawElrondTransaction): ElrondTransaction {
  return {
    family,
    mode,
    amount: new BigNumber(amount),
    recipient,
    fees: fees ? new BigNumber(fees) : undefined,
    data: data ? Buffer.from(data, "hex") : undefined,
    gasLimit: gasLimit ? new BigNumber(gasLimit) : undefined,
  };
}
