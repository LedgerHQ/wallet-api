import BigNumber from "bignumber.js";
import type { PolkadotTransaction, RawPolkadotTransaction } from "./types";

export const serializePolkadotTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fee,
  era,
  validators,
  numOfSlashingSpans,
  rewardDestination,
}: PolkadotTransaction): RawPolkadotTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  mode,
  fee: fee ? fee.toString() : undefined,
  era,
  validators,
  numOfSlashingSpans,
  rewardDestination,
});

export const deserializePolkadotTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fee,
  era,
  validators,
  numOfSlashingSpans,
  rewardDestination,
}: RawPolkadotTransaction): PolkadotTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  mode,
  fee: fee ? new BigNumber(fee) : undefined,
  era,
  validators,
  numOfSlashingSpans,
  rewardDestination,
});
