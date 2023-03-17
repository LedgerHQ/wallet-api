import BigNumber from "bignumber.js";
import type { FilecoinTransaction, RawFilecoinTransaction } from "./types";

export function serializeFilecoinTransaction({
  amount,
  data = undefined,
  family,
  method,
  nonce,
  params = undefined,
  gasLimit,
  gasFeeCap,
  gasPremium,
  recipient,
  version,
}: FilecoinTransaction): RawFilecoinTransaction {
  return {
    amount: amount.toString(),
    data: data ? data.toString("hex") : undefined,
    family,
    gasLimit: gasLimit.toNumber(),
    gasFeeCap: gasFeeCap.toString(),
    gasPremium: gasPremium.toString(),
    method,
    nonce,
    params,
    recipient,
    version,
  };
}

export function deserializeFilecoinTransaction({
  amount,
  data = undefined,
  family,
  method,
  nonce,
  params = undefined,
  gasLimit,
  gasFeeCap,
  gasPremium,
  recipient,
  version,
}: RawFilecoinTransaction): FilecoinTransaction {
  return {
    amount: new BigNumber(amount),
    data: data ? Buffer.from(data, "hex") : undefined,
    family,
    gasLimit: new BigNumber(gasLimit),
    gasFeeCap: new BigNumber(gasFeeCap),
    gasPremium: new BigNumber(gasPremium),
    nonce,
    method,
    params,
    recipient,
    version,
  };
}
