import { z } from "zod";

const schemaAccountGetMaxSpendableParams = z.object({
  accountId: z.string(),
});

// Atomic amount: a finite, non-negative integer. Rejects NaN, Infinity,
// negatives, and fractional values before the client builds a BigNumber.
const schemaAccountGetMaxSpendableResults = z.object({
  maxSpendable: z.string().regex(/^(0|[1-9]\d*)$/),
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
