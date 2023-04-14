import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawFilecoinTransaction = schemaTransactionCommon.extend({
  data: z.string().optional(),
  family: z.literal(schemaFamilies.enum.filecoin),
  gasLimit: z.number(),
  gasFeeCap: z.string(),
  gasPremium: z.string(),
  method: z.number(),
  nonce: z.number(),
  params: z.string().optional(),
  version: z.number(),
});
