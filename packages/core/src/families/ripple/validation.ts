import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawRippleTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ripple),
  fee: z.string().optional(),
  tag: z.number(),
});
