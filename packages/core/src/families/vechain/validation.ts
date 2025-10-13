import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

// Generated from VeChain Thor Transaction types
export const schemaThorTransactionClause = z.object({
  to: z.string().nullable(),
  value: z.union([z.string(), z.number()]),
  data: z.string(),
  comment: z.string().optional(),
  abi: z.string().optional(),
});

// Generated from VeChain Thor Transaction types
// with Buffer type removed for `reserved.unused`
export const schemaThorTransactionBody = z.object({
  chainTag: z.number(),
  blockRef: z.string(),
  expiration: z.number(),
  clauses: z.array(schemaThorTransactionClause),
  gasPriceCoef: z.number().optional(),
  gas: z.union([z.string(), z.number()]),
  dependsOn: z.string().nullable(),
  nonce: z.union([z.string(), z.number()]),
  maxFeePerGas: z.union([z.string(), z.number()]).optional(),
  maxPriorityFeePerGas: z.union([z.string(), z.number()]).optional(),
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
