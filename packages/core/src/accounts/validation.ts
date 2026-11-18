import { z } from "zod";

export const schemaAccountReadiness = z.object({
  ready: z.boolean(),
  // `reason` is intentionally a free-form, non-empty string to stay chain-agnostic.
  // Producers should prefer a documented value from `AccountReadinessReason`
  // (see accounts/types.ts) — keep the two in sync; do not narrow this to an enum.
  reason: z.string().min(1).optional(),
});

// An amount in the account's atomic unit, written out in full (no exponent).
const schemaAtomicAmount = z.string().regex(/^(0|[1-9]\d*)$/);

export const schemaRawAccountBalance = z.object({
  value: schemaAtomicAmount,
  locked: schemaAtomicAmount.optional(),
  pool: z.string().optional(),
  private: z.boolean().optional(),
});

export const schemaRawAccount = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  currency: z.string(),
  balance: z.string(),
  spendableBalance: z.string(),
  blockHeight: z.union([z.number(), z.undefined()]),
  lastSyncDate: z.string(),
  parentAccountId: z.string().optional(),
  publicKey: z.string().optional(),
  readiness: schemaAccountReadiness.optional(),
  // Tolerant: a malformed breakdown is dropped, the account stays listed.
  balances: z.array(schemaRawAccountBalance).optional().catch(undefined),
});
