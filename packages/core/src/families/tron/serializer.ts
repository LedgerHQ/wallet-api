import BigNumber from "bignumber.js";
import type { RawTronTransaction, TronTransaction } from "./types";

export const serializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
  votes,
}: TronTransaction): RawTronTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  mode,
  resource,
  duration,
  votes,
});

export const deserializeTronTransaction = ({
  amount,
  recipient,
  family,
  mode,
  resource,
  duration,
  votes,
}: RawTronTransaction): TronTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  mode,
  resource,
  duration,
  votes,
});
