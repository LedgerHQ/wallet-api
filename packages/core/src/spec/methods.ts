import { z } from "zod";

export type MethodId = z.infer<typeof schemaRPCMethod>;

export const schemaRPCMethod = z.enum([
  "account.list",
  "account.receive",
  "account.request",
  "currency.list",
  "device.close",
  "device.exchange",
  "device.transport",
  "message.sign",
  "transaction.sign",
  "transaction.signAndBroadcast",
  "wallet.capabilities",
  "wallet.info",
  "wallet.userId",
]);
