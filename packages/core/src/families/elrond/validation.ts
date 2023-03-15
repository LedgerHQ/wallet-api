import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

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
  gasLimit: z.string().optional(),
});
