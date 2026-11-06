import { z } from "zod";
import {
  schemaAmount,
  schemaFamilies,
  schemaTransactionCommon,
} from "../common";

export const schemaRawCasperTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.casper),
  fees: schemaAmount,
  transferId: z.string().optional(),
});
