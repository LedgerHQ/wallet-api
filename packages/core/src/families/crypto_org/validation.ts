import { objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawCryptoOrgTransaction } from "./types";

export const isRawCryptoOrgTransaction = objectOf<RawCryptoOrgTransaction>({
  ...isTransactionCommon,
  mode: primitives.string,
  fees: primitives.maybeString,
});
