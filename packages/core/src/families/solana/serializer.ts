import BigNumber from "bignumber.js";
import type { SolanaTransaction, RawSolanaTransaction } from "./types";

export function serializeSolanaTransaction({
  family,
  amount,
  recipient,
}: SolanaTransaction): RawSolanaTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
  };
}

export function deserializeSolanaTransaction({
  family,
  amount,
  recipient,
}: RawSolanaTransaction): SolanaTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
  };
}
