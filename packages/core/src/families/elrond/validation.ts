import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaOperationMode = z.enum([
  "send",
  "delegate",
  "reDelegateRewards",
  "unDelegate",
  "claimRewards",
  "withdraw",
]);

export type ElrondOperationMode = z.infer<typeof schemaOperationMode>;

export const schemaRawElrondTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.elrond),
  mode: z.union([
    z.literal("send"),
    z.literal("delegate"),
    z.literal("reDelegateRewards"),
    z.literal("unDelegate"),
    z.literal("claimRewards"),
    z.literal("withdraw"),
  ]),
  fees: z.string().optional(),
  data: z.string().optional(),
  gasLimit: z.number(),
});
