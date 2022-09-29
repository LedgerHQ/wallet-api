import BigNumber from "bignumber.js";
import type { BitcoinTransaction, RawBitcoinTransaction } from "./types";

export function serializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
}: BitcoinTransaction): RawBitcoinTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    feePerByte: feePerByte ? feePerByte.toString() : undefined,
  };
}

export function deserializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
}: RawBitcoinTransaction): BitcoinTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    feePerByte: feePerByte ? new BigNumber(feePerByte) : undefined,
  };
}
