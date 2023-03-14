import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawNeoTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.neo),
});
