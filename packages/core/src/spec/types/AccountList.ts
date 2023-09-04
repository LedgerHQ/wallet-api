import { z } from "zod";
import { schemaRawAccount } from "../../accounts";

const schemaAccountListParams = z
  .object({
    currencyIds: z.array(z.string()).optional(),
  })
  .optional();

const schemaAccountListResults = z.object({
  rawAccounts: z.array(schemaRawAccount),
});

export const schemaAccountList = {
  params: schemaAccountListParams,
  result: schemaAccountListResults,
};

export type AccountList = {
  params: z.infer<typeof schemaAccountListParams>;
  result: z.infer<typeof schemaAccountListResults>;
};

export type AccountListHandler = (
  params: AccountList["params"],
) => AccountList["result"];
