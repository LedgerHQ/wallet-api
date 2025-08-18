import BigNumber from "bignumber.js";
import type { RawRippleTransaction, RippleTransaction } from "./types";

export const serializeRippleTransaction = ({
  family,
  fee,
  tag,
  amount,
  recipient,
  tx_json,
}: RippleTransaction): RawRippleTransaction => ({
  family,
  amount: amount.toString(),
  recipient,
  fee: fee ? fee.toString() : undefined,
  tag,
  tx_json,
});

export const deserializeRippleTransaction = ({
  family,
  fee,
  tag,
  amount,
  recipient,
  tx_json,
}: RawRippleTransaction): RippleTransaction => ({
  family,
  amount: new BigNumber(amount),
  recipient,
  fee: fee ? new BigNumber(fee) : undefined,
  tag,
  tx_json,
});
