import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawNearTransaction } from "./validation";

export type NearTransaction = TransactionCommon & {
  readonly family: RawNearTransaction["family"];
  mode: string;
  fees?: BigNumber;
};

export type RawNearTransaction = z.infer<typeof schemaRawNearTransaction>;
