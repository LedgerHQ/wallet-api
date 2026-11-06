import { z } from "zod";

const NUMERIC_STRING =
  /^\s*[+-]?(?:0[xX][0-9a-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d{1,4})?)\s*$/;

function isValidBigIntString(value: string): boolean {
  if (value.trim() === "") return false;
  try {
    BigInt(value);
    return true;
  } catch {
    return false;
  }
}

export const schemaAmount = z
  .string()
  .max(100)
  .regex(NUMERIC_STRING, { message: "Expected a numeric string" });

export const schemaAmountOrEmpty = schemaAmount.or(z.literal(""));

export const schemaOptionalAmount = schemaAmountOrEmpty.optional();

export const schemaBigIntString = z
  .string()
  .max(100)
  .refine(isValidBigIntString, { message: "Expected an integer string" });

export const schemaNullableBigIntString = z.union([
  schemaBigIntString,
  z.literal(""),
  z.null(),
]);

export const schemaTransactionCommon = z.object({
  amount: schemaAmount,
  recipient: z.string(),
});

export const FAMILIES = [
  "aleo",
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
  "hypercore",
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
