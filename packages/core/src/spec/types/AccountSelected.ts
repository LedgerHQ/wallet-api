import { z } from "zod";
import { schemaRawAccount } from "../../accounts";

const schemaAccountSelectedParams = z.object({});

const schemaAccountSelectedResults = z.object({
  rawAccount: schemaRawAccount.nullable(),
});

export const schemaAccountSelected = {
  params: schemaAccountSelectedParams,
  result: schemaAccountSelectedResults,
};

export type AccountSelected = {
  params: z.infer<typeof schemaAccountSelectedParams>;
  result: z.infer<typeof schemaAccountSelectedResults>;
};

export type AccountSelectedHandler = (
  params: AccountSelected["params"]
) => AccountSelected["result"];
