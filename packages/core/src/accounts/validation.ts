import { objectOf, primitives } from "@altostra/type-validations";

export const isRawAccount = objectOf({
  id: primitives.string,
  name: primitives.string,
  address: primitives.string,
  currency: primitives.string,
  balance: primitives.string,
  spendableBalance: primitives.string,
  blockHeight: primitives.number,
  lastSyncDate: primitives.string,
});
