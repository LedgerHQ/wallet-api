import BigNumber from "bignumber.js";
import type { PolkadotTransaction, RawPolkadotTransaction } from "./types";

export const serializePolkadotTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fee,
  era,
}: PolkadotTransaction): RawPolkadotTransaction => {
  return {
    amount: amount.toString(),
    recipient,
    family,
    mode,
    fee: fee ? fee.toString() : undefined,
    era,
  };
};

export const deserializePolkadotTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fee,
  era,
}: RawPolkadotTransaction): PolkadotTransaction => {
  return {
    amount: new BigNumber(amount),
    recipient,
    family,
    mode,
    fee: fee ? new BigNumber(fee) : undefined,
    era,
  };
};
