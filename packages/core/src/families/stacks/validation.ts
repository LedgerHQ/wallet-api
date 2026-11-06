import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawStacksTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.stacks),
  fee: schemaOptionalAmount,
  nonce: schemaOptionalAmount,
  memo: z.string().optional(),
  network: z.string(),
  anchorMode: z.number(),
});
