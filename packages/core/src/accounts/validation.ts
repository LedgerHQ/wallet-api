import { z } from "zod";

export const schemaAccountReadiness = z.object({
  ready: z.boolean(),
  // `reason` is intentionally a free-form, non-empty string to stay chain-agnostic.
  // Producers should prefer a documented value from `AccountReadinessReason`
  // (see accounts/types.ts) — keep the two in sync; do not narrow this to an enum.
  reason: z.string().min(1).optional(),
});

// Anything `BigNumber#toString` can produce on bignumber.js 9 or 11 with default config.
const BIGNUMBER_TO_STRING = /^(?:-?\d+(?:\.\d+)?(?:e[+-]\d+)?|NaN|-?Infinity)$/;

const schemaRawBalance = z
  .string()
  .max(1024)
  .regex(BIGNUMBER_TO_STRING, { message: "Expected a serialized BigNumber" });

export const schemaRawAccount = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  currency: z.string(),
  balance: schemaRawBalance,
  spendableBalance: schemaRawBalance,
  blockHeight: z.union([z.number(), z.undefined()]),
  lastSyncDate: z.string(),
  parentAccountId: z.string().optional(),
  publicKey: z.string().optional(),
  readiness: schemaAccountReadiness.optional(),
});
