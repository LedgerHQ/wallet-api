import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawCardanoTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.cardano),
  fees: schemaOptionalAmount,
  mode: z.string(),
  memo: z.string().optional(),
});
