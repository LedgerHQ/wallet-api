import BigNumber from "bignumber.js";
import type { BitcoinTransaction, RawBitcoinTransaction } from "./types";

export function serializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
  opReturnData,
  changeAddress,
}: BitcoinTransaction): RawBitcoinTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    feePerByte: feePerByte?.toString(),
    opReturnDataHex: opReturnData?.toString("hex"),
    changeAddress,
  };
}

export function deserializeBitcoinTransaction({
  family,
  amount,
  recipient,
  feePerByte,
  opReturnDataHex,
  changeAddress,
}: RawBitcoinTransaction): BitcoinTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    feePerByte: feePerByte ? new BigNumber(feePerByte) : undefined,
    opReturnData: opReturnDataHex
      ? Buffer.from(opReturnDataHex, "hex")
      : undefined,
    changeAddress,
  };
}
