import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawRippleTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ripple),
  fee: schemaOptionalAmount,
  tag: z.number(),
});
