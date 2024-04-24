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
  "celo",
  "hedera",
  "filecoin",
  "tezos",
  "polkadot",
  "stellar",
  "tron",
  "near",
  "neo",
  "elrond",
  "cardano",
  "solana",
  "vechain",
  "stacks",
  "internet_computer",
  "casper",
] as const;

export const schemaFamilies = z.enum(FAMILIES);
