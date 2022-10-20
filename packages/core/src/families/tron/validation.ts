import {
  enumOf,
  maybe,
  objectOf,
  primitives,
} from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type {
  RawTronTransaction,
  TronOperationMode,
  TronResource,
} from "./types";

export const isTronOperationMode = enumOf<TronOperationMode>(
  "send",
  "freeze",
  "unfreeze",
  "vote",
  "claimReward"
);

export const isTronResource = enumOf<TronResource>("BANDWIDTH", "ENERGY");

export const isRawTronTransaction = objectOf<RawTronTransaction>({
  ...isTransactionCommon,
  mode: isTronOperationMode,
  resource: maybe(isTronResource),
  duration: primitives.maybeNumber,
});
