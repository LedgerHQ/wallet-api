import BigNumber from "bignumber.js";
import type { RawStacksTransaction, StacksTransaction } from "./types";

export const serializeStacksTransaction = ({
  amount,
  recipient,
  family,
  fee,
  nonce,
  memo,
  network,
  anchorMode,
}: StacksTransaction): RawStacksTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  fee: fee?.toString(),
  nonce: nonce?.toString(),
  memo,
  network,
  anchorMode,
});

export const deserializeStacksTransaction = ({
  amount,
  recipient,
  family,
  fee,
  nonce,
  memo,
  network,
  anchorMode,
}: RawStacksTransaction): StacksTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fee: fee ? new BigNumber(fee) : undefined,
  nonce: nonce ? new BigNumber(nonce) : undefined,
  memo,
  network: network === "mainnet" ? network : "testnet",
  anchorMode,
});
