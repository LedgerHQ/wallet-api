import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawEthereumTransaction } from "./validation";

export type EthereumTransaction = TransactionCommon & {
  readonly family: RawEthereumTransaction["family"];
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
  maxPriorityFeePerGas?: BigNumber;
  maxFeePerGas?: BigNumber;
};

export type RawEthereumTransaction = z.infer<
  typeof schemaRawEthereumTransaction
>;
