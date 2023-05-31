import BigNumber from "bignumber.js";
import type { RawTezosTransaction, TezosTransaction } from "./types";

export const serializeTezosTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fees,
  gasLimit,
}: TezosTransaction): RawTezosTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  mode,
  fees: fees ? fees.toString() : undefined,
  gasLimit: gasLimit ? gasLimit.toString() : undefined,
});

export const deserializeTezosTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fees,
  gasLimit,
}: RawTezosTransaction): TezosTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  mode,
  fees: fees ? new BigNumber(fees) : undefined,
  gasLimit: gasLimit ? new BigNumber(gasLimit) : undefined,
});
