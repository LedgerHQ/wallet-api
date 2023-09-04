import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawNeoTransaction } from "./validation";

export type NeoTransaction = TransactionCommon & {
  readonly family: RawNeoTransaction["family"];
};

export type RawNeoTransaction = z.infer<typeof schemaRawNeoTransaction>;
