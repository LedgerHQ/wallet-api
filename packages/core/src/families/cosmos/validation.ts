import { z } from "zod";
import {
  schemaAmount,
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

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
  amount: schemaAmount,
});

export const schemaRawCosmosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.cosmos),
  mode: schemaCosmosOperationMode,
  fees: schemaOptionalAmount,
  gas: schemaOptionalAmount,
  memo: z.string().optional(),
  sourceValidator: z.string().optional(),
  validators: z.array(cosmosDelegationInfo).optional(),
});
