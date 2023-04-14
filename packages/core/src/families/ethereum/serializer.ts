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
  maxPriorityFeePerGas,
  maxFeePerGas,
}: EthereumTransaction): RawEthereumTransaction {
  return {
    family,
    amount: amount.toString(),
    recipient,
    nonce,
    data: data ? data.toString("hex") : undefined,
    gasPrice: gasPrice ? gasPrice.toString() : undefined,
    gasLimit: gasLimit ? gasLimit.toString() : undefined,
    maxPriorityFeePerGas: maxPriorityFeePerGas
      ? maxPriorityFeePerGas.toString()
      : undefined,
    maxFeePerGas: maxFeePerGas ? maxFeePerGas.toString() : undefined,
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
  maxPriorityFeePerGas,
  maxFeePerGas,
}: RawEthereumTransaction): EthereumTransaction {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    nonce,
    data: data ? Buffer.from(data, "hex") : undefined,
    gasPrice: gasPrice ? new BigNumber(gasPrice) : undefined,
    gasLimit: gasLimit ? new BigNumber(gasLimit) : undefined,
    maxPriorityFeePerGas: maxPriorityFeePerGas
      ? new BigNumber(maxPriorityFeePerGas)
      : undefined,
    maxFeePerGas: maxFeePerGas ? new BigNumber(maxFeePerGas) : undefined,
  };
}
