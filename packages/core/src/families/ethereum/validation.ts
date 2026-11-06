import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaRawEthereumTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ethereum),
  nonce: z.number().optional(),
  data: z.string().optional(),
  gasPrice: schemaOptionalAmount,
  gasLimit: schemaOptionalAmount,
  maxPriorityFeePerGas: schemaOptionalAmount,
  maxFeePerGas: schemaOptionalAmount,
  sponsored: z.boolean().optional(),
});
