import { enumOf, objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { PolkadotOperationMode, RawPolkadotTransaction } from "./types";

export const isPolkadotOperationMode = enumOf<PolkadotOperationMode>(
  "send",
  "bond",
  "unbond",
  "rebond",
  "withdrawUnbonded",
  "setController",
  "nominate",
  "chill",
  "claimReward"
);

export const isRawPolkadotTransaction = objectOf<RawPolkadotTransaction>({
  ...isTransactionCommon,
  mode: isPolkadotOperationMode,
  fee: primitives.maybeString,
  era: primitives.maybeNumber,
});
