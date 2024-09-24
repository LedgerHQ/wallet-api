import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaTonComment = z.object({
  isEncrypted: z.boolean(),
  text: z.string(),
});

export const schemaRawTonTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ton),
  fees: z.string(),
  comment: schemaTonComment,
});
