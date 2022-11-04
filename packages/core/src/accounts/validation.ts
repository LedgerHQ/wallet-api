import { z } from "zod";

export const schemaRawAccount = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  currency: z.string(),
  balance: z.string(),
  spendableBalance: z.string(),
  blockHeight: z.number(),
  lastSyncDate: z.string(),
});
