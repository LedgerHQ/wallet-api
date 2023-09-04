import { z } from "zod";
import { schemaCurrency } from "../../currencies";

const schemaCurrencyListParams = z
  .object({
    currencyIds: z.array(z.string()).optional(),
  })
  .optional();

const schemaCurrencyListResult = z.object({
  currencies: z.array(schemaCurrency),
});

export const schemaCurrencyList = {
  params: schemaCurrencyListParams,
  result: schemaCurrencyListResult,
};

export type CurrencyList = {
  params: z.infer<typeof schemaCurrencyListParams>;
  result: z.infer<typeof schemaCurrencyListResult>;
};

export type CurrencyListHandler = (
  params: CurrencyList["params"],
) => CurrencyList["result"];
