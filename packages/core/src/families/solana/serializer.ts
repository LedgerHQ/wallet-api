import BigNumber from "bignumber.js";
import type { SolanaTransaction, RawSolanaTransaction } from "./types";

export function serializeSolanaTransaction({
  amount,
  family,
  model,
  recipient,
}: SolanaTransaction): RawSolanaTransaction {
  return {
    amount: amount.toString(),
    family,
    model: JSON.stringify(model),
    recipient,
  };
}

export function deserializeSolanaTransaction({
  family,
  amount,
  model,
  recipient,
}: RawSolanaTransaction): SolanaTransaction {
  return {
    amount: new BigNumber(amount),
    family,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    model: JSON.parse(model),
    recipient,
  };
}
