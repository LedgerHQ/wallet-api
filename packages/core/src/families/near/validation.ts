import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaNearOperationMode = z.enum([
  "send",
  "stake",
  "unstake",
  "withdraw",
]);

export const schemaRawNearTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.near),
  mode: schemaNearOperationMode,
  fees: z.string().optional(),
});
