import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawHederaTransaction } from "./validation";

export type HederaTransaction = TransactionCommon & {
  readonly family: RawHederaTransaction["family"];
  memo?: string;
};

export type RawHederaTransaction = z.infer<typeof schemaRawHederaTransaction>;
