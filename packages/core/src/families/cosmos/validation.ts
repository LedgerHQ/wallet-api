import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaCosmosOperationMode = z.enum([
  "send",
  "delegate",
  "undelegate",
  "redelegate",
  "claimReward",
  "claimRewardCompound",
]);

export const schemaRawCosmosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.cosmos),
  mode: schemaCosmosOperationMode,
  fees: z.string().optional(),
  gas: z.string().optional(),
  memo: z.string().optional(),
});
