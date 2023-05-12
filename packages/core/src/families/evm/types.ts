import type { z } from "zod";
import type BigNumber from "bignumber.js";
import type { TransactionCommon } from "..";
import type {
  schemaRawEvmTransaction,
  schemaRawEvmTransactionEIP1559,
} from "./validation";

export interface EvmTransactionBase extends TransactionCommon {
  readonly family: RawEvmTransaction["family"];
  nonce: number;
  gasLimit: BigNumber;
  chainId: number;
  data?: Buffer | null;
  additionalFees?: BigNumber;
}

export interface EvmTransactionLegacy extends EvmTransactionBase {
  type?: 0 | 1;
  gasPrice: BigNumber;
  maxPriorityFeePerGas?: never;
  maxFeePerGas?: never;
}

export interface EvmTransactionEIP1559 extends EvmTransactionBase {
  type: 2;
  gasPrice?: never;
  maxPriorityFeePerGas: BigNumber;
  maxFeePerGas: BigNumber;
}

export type EvmTransaction = EvmTransactionLegacy | EvmTransactionEIP1559;

export type RawEvmTransaction = z.infer<typeof schemaRawEvmTransaction>;

export type RawEvmTransactionEIP1559 = z.infer<
  typeof schemaRawEvmTransactionEIP1559
>;
