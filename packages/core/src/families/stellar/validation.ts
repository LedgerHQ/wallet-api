import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawStellarTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.stellar),
  fees: z.string().optional(),
  memoType: z.string().optional(),
  memoValue: z.string().optional(),
});
