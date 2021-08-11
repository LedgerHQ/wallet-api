import BigNumber from "bignumber.js";
import type { TronTransaction, RawTronTransaction } from "./types";

export const serializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
}: TronTransaction): RawTronTransaction => {
  return {
    amount: amount.toString(),
    recipient,
    family,
    mode,
    resource,
    duration,
  };
};

export const deserializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
}: RawTronTransaction): TronTransaction => {
  return {
    amount: new BigNumber(amount),
    recipient,
    family,
    mode,
    resource,
    duration,
  };
};
