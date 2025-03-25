import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawSuiTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.sui),
  mode: z.string(),
  fees: z.string().optional(),
});
