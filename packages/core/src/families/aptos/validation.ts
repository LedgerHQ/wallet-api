import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaAptosOperationMode = z.enum(["send"]);

export const schemaRawAptosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.aptos),
  mode: schemaAptosOperationMode,
  fees: schemaOptionalAmount,
});
