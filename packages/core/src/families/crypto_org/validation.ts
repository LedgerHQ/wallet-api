import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawCryptoOrgTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.crypto_org),
  mode: z.string(),
  fees: schemaOptionalAmount,
});
