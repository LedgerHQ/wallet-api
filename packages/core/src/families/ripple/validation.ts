import { objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawRippleTransaction } from "./types";

export const isRawRippleTransaction = objectOf<RawRippleTransaction>({
  ...isTransactionCommon,
  fee: primitives.maybeString,
  tag: primitives.number,
});
