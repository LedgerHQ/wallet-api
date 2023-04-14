import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawHederaTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.hedera),
  memo: z.string().max(100).optional(),
});
