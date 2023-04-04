import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawSolanaTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.solana),
  model: z.string(),
});
