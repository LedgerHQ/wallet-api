import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawEthereumTransaction } from "./validation";

export interface EthereumTransaction extends TransactionCommon {
  readonly family: RawEthereumTransaction["family"];
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
}

export type RawEthereumTransaction = z.infer<
  typeof schemaRawEthereumTransaction
>;
