import { primitives } from "@altostra/type-validations";

export const isTransactionCommon = {
  amount: primitives.string,
  recipient: primitives.string,
  family: primitives.string,
};
