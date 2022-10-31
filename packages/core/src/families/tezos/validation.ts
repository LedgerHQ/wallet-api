import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaTezosOperationMode = z.enum([
  "send",
  "delegate",
  "undelegate",
]);

export const schemaRawTezosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.tezos),
  mode: schemaTezosOperationMode,
  fees: z.string().optional(),
  gasLimit: z.string().optional(),
});
