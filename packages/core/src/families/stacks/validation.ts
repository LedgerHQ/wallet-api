import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawStacksTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.stacks),
  fee: z.string().optional(),
  nonce: z.string().optional(),
  memo: z.string().optional(),
  network: z.string(),
  anchorMode: z.number(),
});
