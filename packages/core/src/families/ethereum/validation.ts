import { objectOf, primitives } from "@altostra/type-validations";
import { isTransactionCommon } from "../common";
import type { RawEthereumTransaction } from "./types";

export const isRawEthereumTransaction = objectOf<RawEthereumTransaction>({
  ...isTransactionCommon,
  nonce: primitives.maybeNumber,
  data: primitives.maybeString,
  gasPrice: primitives.maybeString,
  gasLimit: primitives.maybeString,
});
