import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const stellarMemoTypeEnum = z.enum([
  "MEMO_TEXT",
  "MEMO_ID",
  "MEMO_HASH",
  "MEMO_RETURN",
]);

export const schemaRawStellarTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.stellar),
  fees: schemaOptionalAmount,
  memoType: stellarMemoTypeEnum.optional(),
  memoValue: z.string().optional(),
});
