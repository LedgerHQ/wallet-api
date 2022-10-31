import { z } from "zod";

export const schemaTransactionCommon = z.object({
  amount: z.string(),
  recipient: z.string(),
});

export const schemaFamilies = z.enum([
  "bitcoin",
  "ethereum",
  "algorand",
  "crypto_org",
  "ripple",
  "cosmos",
  "ripple",
  "cosmos",
  "tezos",
  "polkadot",
  "stellar",
  "tron",
]);
