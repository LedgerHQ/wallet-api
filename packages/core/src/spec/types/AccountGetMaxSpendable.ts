import { z } from "zod";

const schemaAccountGetMaxSpendableParams = z.object({
  accountId: z.string(),
});

const schemaAccountGetMaxSpendableResults = z.object({
  maxSpendable: z.string(),
});

export const schemaAccountGetMaxSpendable = {
  params: schemaAccountGetMaxSpendableParams,
  result: schemaAccountGetMaxSpendableResults,
};

export type AccountGetMaxSpendable = {
  params: z.infer<typeof schemaAccountGetMaxSpendableParams>;
  result: z.infer<typeof schemaAccountGetMaxSpendableResults>;
};

export type AccountGetMaxSpendableHandler = (
  params: AccountGetMaxSpendable["params"],
) => AccountGetMaxSpendable["result"];
