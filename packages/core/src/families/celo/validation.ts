import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaOperationMode = z.enum([
  "send",
  "lock",
  "unlock",
  "withdraw",
  "vote",
  "revoke",
  "activate",
  "register",
]);

export const schemaRawCeloTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.celo),
  fees: z.string().optional().nullable(),
  mode: schemaOperationMode,
  index: z.number().optional().nullable(),
});

export type CeloOperationMode = z.infer<typeof schemaOperationMode>;
