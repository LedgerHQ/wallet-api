import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaAlgorandOperationMode = z.enum([
  "send",
  "optIn",
  "claimReward",
  "optOut",
]);

export const schemaRawAlgorandTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.algorand),
  mode: schemaAlgorandOperationMode,
  fees: z.string().optional(),
  assetId: z.string().optional(),
  memo: z.string().optional(),
});
