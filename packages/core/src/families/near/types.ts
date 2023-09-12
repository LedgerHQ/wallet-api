import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaNearOperationMode,
  schemaRawNearTransaction,
} from "./validation";

export type NearOperationMode = z.infer<typeof schemaNearOperationMode>;

export type NearTransaction = TransactionCommon & {
  readonly family: RawNearTransaction["family"];
  mode: NearOperationMode;
  fees?: BigNumber;
};

export type RawNearTransaction = z.infer<typeof schemaRawNearTransaction>;
