import BigNumber from "bignumber.js";
import type {
  RawEvmTransaction,
  EvmTransaction,
  EvmTransactionEIP1559,
  RawEvmTransactionEIP1559,
} from "./types";

function isEIP1559Tx(tx: EvmTransaction): tx is EvmTransactionEIP1559 {
  return tx.type === 2;
}

function isRawEIP1559Tx(tx: RawEvmTransaction): tx is RawEvmTransactionEIP1559 {
  return tx.type === 2;
}

export function serialize(tx: EvmTransaction): RawEvmTransaction {
  // const baseTx = {
  //   ...tx,
  //   gasLimt: tx.gasLimit.toString(),
  //   data: tx.data ? tx.data.toString("hex") : undefined,
  //   additionalFee: tx.additionalFees?.toString(),
  // };

  return isEIP1559Tx(tx)
    ? {
        // ...baseTx,
        gasLimit: tx.gasLimit.toString(),
        data: tx.data?.toString("hex"),
        additionalFees: tx.additionalFees?.toString(),
        maxPriorityFeePerGas: tx.maxPriorityFeePerGas.toString(),
        maxFeePerGas: tx.maxFeePerGas.toString(),
      }
    : {
        // ...baseTx,
        gasLimit: tx.gasLimit.toString(),
        data: tx.data?.toString("hex"),
        additionalFee: tx.additionalFees?.toString(),
        gasPrice: tx.gasPrice.toString(),
      };
}

export function deserialize(rawTx: RawEvmTransaction): EvmTransaction {
  // const baseTx = {
  //   ...rawTx,
  //   gasLimt: rawTx.gasLimit ? BigNumber(rawTx.gasLimit) : undefined,
  //   data: rawTx.data ? Buffer.from(rawTx.data) : undefined,
  //   additionalFee: rawTx.additionalFees
  //     ? BigNumber(rawTx.additionalFees)
  //     : undefined,
  // };

  return isRawEIP1559Tx(rawTx)
    ? {
        // ...baseTx,
        gasLimit: BigNumber(rawTx.gasLimit),
        data: rawTx.data ? Buffer.from(rawTx.data) : undefined,
        additionalFees: rawTx.additionalFees
          ? BigNumber(rawTx.additionalFees)
          : undefined,
        maxPriorityFeePerGas: BigNumber(rawTx.maxPriorityFeePerGas),
        maxFeePerGas: BigNumber(rawTx.maxFeePerGas),
      }
    : {
        // ...baseTx,
        gasLimit: rawTx.gasLimit ? BigNumber(rawTx.gasLimit) : undefined,
        data: rawTx.data ? Buffer.from(rawTx.data) : undefined,
        additionalFees: rawTx.additionalFees
          ? BigNumber(rawTx.additionalFees)
          : undefined,
        gasPrice: BigNumber(rawTx.gasPrice),
      };
}
