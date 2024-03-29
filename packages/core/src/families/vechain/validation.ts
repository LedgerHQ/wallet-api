import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

// Generated from VeChain Thor Transaction types
export const schemaThorTransactionClause = z.object({
  to: z.string().nullable(),
  value: z.union([z.string(), z.number()]),
  data: z.string(),
});

// Generated from VeChain Thor Transaction types
// with Buffer type removed for `reserved.unused`
export const schemaThorTransactionBody = z.object({
  chainTag: z.number(),
  blockRef: z.string(),
  expiration: z.number(),
  clauses: z.array(schemaThorTransactionClause),
  gasPriceCoef: z.number(),
  gas: z.union([z.string(), z.number()]),
  dependsOn: z.string().nullable(),
  nonce: z.union([z.string(), z.number()]),
  reserved: z
    .object({
      features: z.number().optional(),
      unused: z.array(z.any()).optional(),
    })
    .optional(),
});

export const schemaRawVechainTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.vechain),
  estimatedFees: z.string(),
  body: schemaThorTransactionBody,
});
