import BigNumber from "bignumber.js";
import type { RawTonTransaction, TonTransaction } from "./types";

export const serializeTonTransaction = ({
  amount,
  recipient,
  family,
  fees,
  comment,
}: TonTransaction): RawTonTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  fees: fees.toString(),
  comment,
});

export const deserializeTonTransaction = ({
  amount,
  recipient,
  family,
  fees,
  comment,
}: RawTonTransaction): TonTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fees: new BigNumber(fees),
  comment,
});
