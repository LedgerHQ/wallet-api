import { z } from "zod";
import { schemaRawTransaction } from "../../families";

const schemaTransactionOptions = z.object({
  hwAppId: z.string().optional(),
});

const schemaTransactionSignAndBroadcastParams = z.object({
  accountId: z.string(),
  rawTransaction: schemaRawTransaction,
  options: schemaTransactionOptions.optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
  tokenCurrency: z.string().optional(),
});

const schemaTransactionSignAndBroadcastResults = z.object({
  transactionHash: z.string(),
});

export const schemaTransactionSignAndBroadcast = {
  params: schemaTransactionSignAndBroadcastParams,
  result: schemaTransactionSignAndBroadcastResults,
};

export type TransactionSignAndBroadcast = {
  params: z.infer<typeof schemaTransactionSignAndBroadcastParams>;
  result: z.infer<typeof schemaTransactionSignAndBroadcastResults>;
};

export type TransactionSignAndBroadcastHandler = (
  params: TransactionSignAndBroadcast["params"],
) => TransactionSignAndBroadcast["result"];
