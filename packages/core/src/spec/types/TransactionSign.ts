import { z } from "zod";
import { schemaRawTransaction } from "../../families";

const schemaTransactionOptions = z.object({
  hwAppId: z.string().optional(),
});

const schemaTransactionSignParams = z.object({
  accountId: z.string(),
  rawTransaction: schemaRawTransaction,
  options: schemaTransactionOptions.optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
  tokenCurrency: z.string().optional(),
});

const schemaTransactionSignResults = z.object({
  signedTransactionHex: z.string(),
});

export const schemaTransactionSign = {
  params: schemaTransactionSignParams,
  result: schemaTransactionSignResults,
};

export type TransactionSign = {
  params: z.infer<typeof schemaTransactionSignParams>;
  result: z.infer<typeof schemaTransactionSignResults>;
};

export type TransactionSignHandler = (
  params: TransactionSign["params"],
) => TransactionSign["result"];
