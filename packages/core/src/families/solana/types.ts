import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawSolanaTransaction } from "./validation";

export interface SolanaTransaction extends TransactionCommon {
  readonly family: RawSolanaTransaction["family"];
}

export type RawSolanaTransaction = z.infer<typeof schemaRawSolanaTransaction>;
