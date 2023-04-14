import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawEthereumTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ethereum),
  nonce: z.number().optional(),
  data: z.string().optional(),
  gasPrice: z.string().optional(),
  gasLimit: z.string().optional(),
  maxPriorityFeePerGas: z.string().optional(),
  maxFeePerGas: z.string().optional(),
});
