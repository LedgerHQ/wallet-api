import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawSuiTransaction } from "./validation";

export type SuiTransaction = TransactionCommon & {
  readonly family: RawSuiTransaction["family"];
  mode: string;
  fees?: BigNumber;
};

export type RawSuiTransaction = z.infer<typeof schemaRawSuiTransaction>;
