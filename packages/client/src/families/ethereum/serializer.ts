import BigNumber from "bignumber.js";

import { EthereumTransaction, RawEthereumTransaction } from "./types";

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
    family: family,
    amount: amount.toString(),
    recipient: recipient,
    nonce: nonce,
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
    family: family,
    amount: new BigNumber(amount),
    recipient: recipient,
    nonce: nonce,
    data: data ? Buffer.from(data, "hex") : undefined,
    gasPrice: gasPrice ? new BigNumber(gasPrice) : undefined,
    gasLimit: gasLimit ? new BigNumber(gasLimit) : undefined,
  };
}
