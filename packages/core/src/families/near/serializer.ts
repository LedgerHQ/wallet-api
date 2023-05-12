import BigNumber from "bignumber.js";
import type { RawNearTransaction, NearTransaction } from "./types";

export function serialize(tx: NearTransaction): RawNearTransaction {
  return {
    ...tx,
    amount: tx.amount.toString(),
    fees: tx.fees?.toString(),
  };
}

export function deserialize(rawTx: RawNearTransaction): NearTransaction {
  return {
    ...rawTx,
    amount: new BigNumber(rawTx.amount),
    fees: rawTx.fees ? new BigNumber(rawTx.fees) : undefined,
  };
}
