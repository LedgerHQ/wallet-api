import BigNumber from "bignumber.js";
import type { BitcoinTransaction, RawBitcoinTransaction } from "./types";

export function serializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
  opReturnData,
  psbt,
}: BitcoinTransaction): RawBitcoinTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    feePerByte: feePerByte?.toString(),
    opReturnDataHex: opReturnData?.toString("hex"),
    psbt,
  };
}

export function deserializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
  opReturnDataHex,
  psbt,
}: RawBitcoinTransaction): BitcoinTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    feePerByte: feePerByte ? new BigNumber(feePerByte) : undefined,
    opReturnData: opReturnDataHex
      ? Buffer.from(opReturnDataHex, "hex")
      : undefined,
    psbt,
  };
}
