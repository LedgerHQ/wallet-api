import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawCardanoTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.cardano),
  fees: z.string().optional(),
  mode: z.string(),
  memo: z.string().optional(),
});
