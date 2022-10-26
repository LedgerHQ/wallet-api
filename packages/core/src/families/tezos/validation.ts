import { enumOf, objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawTezosTransaction, TezosOperationMode } from "./types";

export const isTezosOperationMode = enumOf<TezosOperationMode>(
  "send",
  "delegate",
  "undelegate"
);

export const isRawTezosTransaction = objectOf<RawTezosTransaction>({
  ...isTransactionCommon,
  mode: isTezosOperationMode,
  fees: primitives.maybeString,
  gasLimit: primitives.maybeString,
});
