import { objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawBitcoinTransaction } from "./types";

export const isRawBitcoinTransaction = objectOf<RawBitcoinTransaction>({
  ...isTransactionCommon,
  feePerByte: primitives.maybeString,
});
