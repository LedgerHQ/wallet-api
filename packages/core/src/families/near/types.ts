import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawNearTransaction } from "./validation";

export interface NearTransaction extends TransactionCommon {
  readonly family: RawNearTransaction["family"];
  mode: string;
  fees?: BigNumber;
}

export type RawNearTransaction = z.infer<typeof schemaRawNearTransaction>;
