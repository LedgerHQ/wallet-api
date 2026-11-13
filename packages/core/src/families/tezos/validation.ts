import { z } from "zod";
import {
  schemaFamilies,
  schemaOptionalAmount,
  schemaTransactionCommon,
} from "../common";

export const schemaTezosOperationMode = z.enum([
  "send",
  "delegate",
  "undelegate",
]);

export const schemaRawTezosTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.tezos),
  mode: schemaTezosOperationMode,
  fees: schemaOptionalAmount,
  gasLimit: schemaOptionalAmount,
});
