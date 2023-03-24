import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawHederaTransaction } from "./validation";

export interface HederaTransaction extends TransactionCommon {
  readonly family: RawHederaTransaction["family"];
  memo?: string;
}

export type RawHederaTransaction = z.infer<typeof schemaRawHederaTransaction>;
