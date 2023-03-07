import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawBitcoinTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.bitcoin),
  feePerByte: z.string().optional(),
  opReturnDataHex: z.string().max(160).optional(),
});
