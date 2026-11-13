import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawNearTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.near),
  mode: z.string(),
  fees: schemaOptionalAmount,
});
