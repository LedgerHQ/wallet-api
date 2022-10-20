import { enumOf, objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawCosmosTransaction, CosmosOperationMode } from "./types";

export const isCosmosOperationMode = enumOf<CosmosOperationMode>(
  "send",
  "delegate",
  "undelegate",
  "redelegate",
  "claimReward",
  "claimRewardCompound"
);

export const isRawCosmosTransaction = objectOf<RawCosmosTransaction>({
  ...isTransactionCommon,
  mode: isCosmosOperationMode,
  fees: primitives.maybeString,
  gas: primitives.maybeString,
  memo: primitives.maybeString,
});
