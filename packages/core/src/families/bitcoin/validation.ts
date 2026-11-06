import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawBitcoinTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.bitcoin),
  feePerByte: schemaOptionalAmount,
  opReturnDataHex: z.string().max(160).optional(),
  changeAddress: z.string().optional(),
});
