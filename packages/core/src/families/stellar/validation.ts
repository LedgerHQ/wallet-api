import { objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawStellarTransaction } from "./types";

export const isRawStellarTransaction = objectOf<RawStellarTransaction>({
  ...isTransactionCommon,
  fees: primitives.maybeString,
  memoType: primitives.maybeString,
  memoValue: primitives.maybeString,
});
