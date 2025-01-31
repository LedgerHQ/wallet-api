import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaAptosOperationMode = z.enum(["send"]);

export const schemaRawAptosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.aptos),
  mode: schemaAptosOperationMode,
  fees: z.string().optional(),
});
