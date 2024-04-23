import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawInternetComputerTransaction =
  schemaTransactionCommon.extend({
    family: z.literal(schemaFamilies.enum.internet_computer),
    fees: z.string(),
    memo: z.string().optional(),
  });
