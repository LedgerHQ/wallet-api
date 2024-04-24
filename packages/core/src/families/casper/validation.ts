import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawCasperTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.internet_computer),
  fees: z.string(),
  transferId: z.string().optional(),
});
