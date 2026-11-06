import { z } from "zod";
import {
  schemaAmount,
  schemaFamilies,
  schemaTransactionCommon,
} from "../common";

export const schemaRawInternetComputerTransaction =
  schemaTransactionCommon.extend({
    family: z.literal(schemaFamilies.enum.internet_computer),
    fees: schemaAmount,
    memo: z.string().optional(),
  });
