import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaTronOperationMode = z.enum([
  "send",
  "freeze",
  "unfreeze",
  "vote",
  "claimReward",
  "withdrawExpireUnfreeze",
  "unDelegateResource",
  "legacyUnfreeze",
]);

export const schemaTronResource = z.enum(["BANDWIDTH", "ENERGY"]);

export const schemaTronVotes = z.object({
  address: z.string(),
  voteCount: z.number(),
});

export const schemaRawTronTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.tron),
  mode: schemaTronOperationMode,
  resource: schemaTronResource.optional(),
  duration: z.number().optional(),
  votes: z.array(schemaTronVotes).optional(),
});
