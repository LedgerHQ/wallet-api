import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawFilecoinTransaction } from "./validation";

export type FilecoinTransaction = TransactionCommon & {
  readonly family: RawFilecoinTransaction["family"];
  nonce: number;
  data?: Buffer;
  method: number;
  version: number;
  params?: string;
  gasLimit: BigNumber;
  gasFeeCap: BigNumber;
  gasPremium: BigNumber;
};

export type RawFilecoinTransaction = z.infer<
  typeof schemaRawFilecoinTransaction
>;
