import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { CeloOperationMode, schemaRawCeloTransaction } from "./validation";

export type CeloTransaction = TransactionCommon & {
  readonly family: RawCeloTransaction["family"];
  fees?: BigNumber;
  index?: number | null;
  mode: CeloOperationMode;
};

export type RawCeloTransaction = z.infer<typeof schemaRawCeloTransaction>;
