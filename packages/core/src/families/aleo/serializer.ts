import BigNumber from "bignumber.js";
import type { AleoTransaction, RawAleoTransaction } from "./types";

export const serializeAleoTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: AleoTransaction): RawAleoTransaction => ({
  family,
  amount: amount.toString(),
  recipient,
  fees: fees.toString(),
  mode,
});

export const deserializeAleoTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: RawAleoTransaction): AleoTransaction => ({
  family,
  amount: new BigNumber(amount),
  recipient,
  fees: new BigNumber(fees),
  mode,
});
