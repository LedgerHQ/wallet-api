import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

const schemaRawEvmTransactionBase = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.evm),
  nonce: z.number(),
  gasLimit: z.string(),
  chainId: z.number(),
  data: z.string().nullish(),
  additionalFees: z.string().optional(),
});

export const schemaRawEvmTransactionRegacy = schemaRawEvmTransactionBase.extend(
  {
    type: z.number().gte(0).lte(1).optional(),
    gasPrice: z.string(),
    maxPriorityFeePerGas: z.never().optional(),
    maxFeePerGas: z.never().optional(),
  }
);

export const schemaRawEvmTransactionEIP1559 =
  schemaRawEvmTransactionBase.extend({
    type: z.number().gt(1).lt(3),
    gasPrice: z.never().optional(),
    maxPriorityFeePerGas: z.string(),
    maxFeePerGas: z.string(),
  });

export const schemaRawEvmTransaction = z.union([
  schemaRawEvmTransactionRegacy,
  schemaRawEvmTransactionEIP1559,
]);
