import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawKaspaTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.kaspa),
  customFeeRate: z.string().optional(),
});
