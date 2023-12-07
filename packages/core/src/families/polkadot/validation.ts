import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaPolkadotOperationMode = z.enum([
  "send",
  "bond",
  "unbond",
  "rebond",
  "withdrawUnbonded",
  "setController",
  "nominate",
  "chill",
  "claimReward",
]);

export const schemaPolkadotRewardDestination = z.enum([
  "Staked",
  "Stash",
  "Controller",
  "Account",
  "None",
]);

export const schemaRawPolkadotTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.polkadot),
  mode: schemaPolkadotOperationMode,
  fee: z.string().optional(),
  era: z.number().optional(),
  validators: z.array(z.string()).optional(),
  rewardDestination: schemaPolkadotRewardDestination.optional(),
  numOfSlashingSpans: z.number().optional(),
});
