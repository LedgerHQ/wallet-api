import { z } from "zod";
import { schemaRawAccount } from "../../accounts";

const schemaAccountRequestParams = z.object({
  currencyIds: z.array(z.string()).optional(),
  showAccountFilter: z.boolean().optional(),
  drawerConfiguration: z
    .object({
      assets: z
        .object({
          filter: z.string().optional(),
          leftElement: z.string().optional(),
          rightElement: z.string().optional(),
        })
        .optional(),
      networks: z
        .object({
          leftElement: z.string().optional(),
          rightElement: z.string().optional(),
        })
        .optional(),
    })
    .optional(),
});

const schemaAccountRequestResults = z.object({
  rawAccount: schemaRawAccount,
});

export const schemaAccountRequest = {
  params: schemaAccountRequestParams,
  result: schemaAccountRequestResults,
};

export type AccountRequest = {
  params: z.infer<typeof schemaAccountRequestParams>;
  result: z.infer<typeof schemaAccountRequestResults>;
};

export type AccountRequestHandler = (
  params: AccountRequest["params"],
) => AccountRequest["result"];
