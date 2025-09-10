import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

const base64Regex =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}(?:==)?|[A-Za-z0-9+/]{3}=?)?$/;

export const schemaRawBitcoinTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.bitcoin),
  feePerByte: z.string().optional(),
  opReturnDataHex: z.string().max(160).optional(),
  psbt: z.string().regex(base64Regex, "psbt must be valid base64").optional(),
});
