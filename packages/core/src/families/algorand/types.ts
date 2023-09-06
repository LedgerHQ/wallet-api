import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaAlgorandOperationMode,
  schemaRawAlgorandTransaction,
} from "./validation";

export type AlgorandOperationMode = z.infer<typeof schemaAlgorandOperationMode>;

export type AlgorandTransaction = TransactionCommon & {
  readonly family: RawAlgorandTransaction["family"];
  mode: AlgorandOperationMode;
  fees?: BigNumber;
  assetId?: string;
  memo?: string;
};

export type RawAlgorandTransaction = z.infer<
  typeof schemaRawAlgorandTransaction
>;
