import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawCryptoOrgTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.crypto_org),
  mode: z.string(),
  fees: z.string().optional(),
});
