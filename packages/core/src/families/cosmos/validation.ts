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

const cosmosDelegationInfo = z.object({
  address: z.string(),
  amount: z.string(),
});

export const schemaRawCosmosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.cosmos),
  mode: schemaCosmosOperationMode,
  fees: z.string().optional(),
  gas: z.string().optional(),
  memo: z.string().optional(),
  sourceValidator: z.string().optional(),
  validators: z.array(cosmosDelegationInfo).optional(),
});
