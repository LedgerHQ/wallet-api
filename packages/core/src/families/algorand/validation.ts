import { enumOf, objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawAlgorandTransaction, AlgorandOperationMode } from "./types";

export const isAlgorandOperationMode = enumOf<AlgorandOperationMode>(
  "send",
  "optIn",
  "claimReward",
  "optOut"
);

export const isRawAlgorandTransaction = objectOf<RawAlgorandTransaction>({
  ...isTransactionCommon,
  mode: isAlgorandOperationMode,
  fees: primitives.maybeString,
  assetId: primitives.maybeString,
  memo: primitives.maybeString,
});
