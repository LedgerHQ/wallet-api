import { z } from "zod";

export const schemaTransactionCommon = z.object({
  amount: z.string(),
  recipient: z.string(),
});

export const FAMILIES = [
  "bitcoin",
  "ethereum",
  "algorand",
  "crypto_org",
  "ripple",
  "cosmos",
  "ripple",
  "cosmos",
  "hedera",
  "tezos",
  "polkadot",
  "stellar",
  "tron",
] as const;

export const schemaFamilies = z.enum(FAMILIES);
