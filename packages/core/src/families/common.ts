import { z } from "zod";

export const schemaTransactionCommon = z.object({
  amount: z.string(),
  recipient: z.string(),
});

export const FAMILIES = [
  "algorand",
  "bitcoin",
  "cardano",
  "celo",
  "cosmos",
  "crypto_org",
  "elrond",
  "ethereum",
  "evm",
  "filecoin",
  "hedera",
  "near",
  "neo",
  "polkadot",
  "ripple",
  "solana",
  "stellar",
  "tezos",
  "tron",
] as const;

export const schemaFamilies = z.enum(FAMILIES);
