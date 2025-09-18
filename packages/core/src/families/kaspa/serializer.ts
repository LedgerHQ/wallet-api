import BigNumber from "bignumber.js";
import type { KaspaTransaction, RawKaspaTransaction } from "./types";

export function serializeKaspaTransaction({
  family,
  amount,
  recipient,
  customFeeRate,
}: KaspaTransaction): RawKaspaTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    customFeeRate: customFeeRate?.toString(),
  };
}

export function deserializeKaspaTransaction({
  family,
  amount,
  recipient,
  customFeeRate,
}: RawKaspaTransaction): KaspaTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    customFeeRate: customFeeRate ? new BigNumber(customFeeRate) : undefined,
  };
}
