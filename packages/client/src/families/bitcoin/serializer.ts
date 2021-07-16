import BigNumber from "bignumber.js";
import { BitcoinTransaction, RawBitcoinTransaction } from "./types";

export function serializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
}: BitcoinTransaction): RawBitcoinTransaction {
  return {
    family: family,
    amount: amount.toString(),
    recipient: recipient,
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
    family: family,
    amount: new BigNumber(amount),
    recipient: recipient,
    feePerByte: feePerByte ? new BigNumber(feePerByte) : undefined,
  };
}
