import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaAleoOperationMode,
  schemaRawAleoTransaction,
} from "./validation";

export type AleoOperationMode = z.infer<typeof schemaAleoOperationMode>;

export type AleoTransaction = TransactionCommon & {
  readonly family: RawAleoTransaction["family"];
  mode: AleoOperationMode;
  fees: BigNumber;
};

export type RawAleoTransaction = z.infer<typeof schemaRawAleoTransaction>;
