import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawKaspaTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.kaspa),
  customFeeRate: schemaOptionalAmount,
});
