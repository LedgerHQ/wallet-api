import { z } from "zod";

const schemaTransactionOptions = z.object({
  hwAppId: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
});

const schemaTransactionSignRawParams = z.object({
  accountId: z.string(),
  rawTransaction: z.string(),
  broadcast: z.boolean().optional(),
  options: schemaTransactionOptions.optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
});

const schemaTransactionSignRawResults = z.object({
  signedTransactionHex: z.string(),
  transactionHash: z.string().optional(),
});

export const schemaTransactionSignRaw = {
  params: schemaTransactionSignRawParams,
  result: schemaTransactionSignRawResults,
};

export type TransactionSignRaw = {
  params: z.infer<typeof schemaTransactionSignRawParams>;
  result: z.infer<typeof schemaTransactionSignRawResults>;
};

export type TransactionSignRawHandler = (
  params: TransactionSignRaw["params"],
) => TransactionSignRaw["result"];
