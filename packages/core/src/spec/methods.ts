import { z } from "zod";

export type MethodId = z.infer<typeof schemaRPCMethod>;

export const schemaRPCMethod = z.enum([
  "account.list",
  "account.receive",
  "account.request",
  "currency.list",
  "message.sign",
  "transaction.sign",
  "transaction.signAndBroadcast",
]);
