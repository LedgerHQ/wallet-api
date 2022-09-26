import BigNumber from "bignumber.js";
import type { EthereumTransaction, RawEthereumTransaction } from "./types";

export function serializeEthereumTransaction({
  family,
  amount,
  recipient,
  nonce,
  data,
  gasPrice,
  gasLimit,
}: EthereumTransaction): RawEthereumTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    nonce,
    data: data ? data.toString("hex") : undefined,
    gasPrice: gasPrice ? gasPrice.toString() : undefined,
    gasLimit: gasLimit ? gasLimit.toString() : undefined,
  };
}

export function deserializeEthereumTransaction({
  family,
  amount,
  recipient,
  nonce,
  data,
  gasPrice,
  gasLimit,
}: RawEthereumTransaction): EthereumTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    nonce,
    data: data ? Buffer.from(data, "hex") : undefined,
    gasPrice: gasPrice ? new BigNumber(gasPrice) : undefined,
    gasLimit: gasLimit ? new BigNumber(gasLimit) : undefined,
  };
}
