import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaAleoOperationMode = z.enum(["transfer_public"]);

export const schemaRawAleoTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.aleo),
  mode: schemaAleoOperationMode,
  fees: z.string(),
});
