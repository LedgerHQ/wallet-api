import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawSolanaTransaction } from "./validation";

export interface SolanaTransaction extends TransactionCommon {
  readonly family: RawSolanaTransaction["family"];
  model: object;
}

export type RawSolanaTransaction = z.infer<typeof schemaRawSolanaTransaction>;
