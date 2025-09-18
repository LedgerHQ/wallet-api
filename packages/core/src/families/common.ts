import { z } from "zod";

export const schemaTransactionCommon = z.object({
  amount: z.string(),
  recipient: z.string(),
});

export const FAMILIES = [
  "algorand",
  "aptos",
  "bitcoin",
  "cardano",
  "casper",
  "celo",
  "crypto_org",
  "cosmos",
  "elrond",
  "ethereum",
  "filecoin",
  "hedera",
  "internet_computer",
  "kaspa",
  "near",
  "neo",
  "polkadot",
  "ripple",
  "solana",
  "stacks",
  "stellar",
  "sui",
  "tezos",
  "ton",
  "tron",
  "vechain",
] as const;

export const schemaFamilies = z.enum(FAMILIES);
