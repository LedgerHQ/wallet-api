import { z } from "zod";

const schemaExchangeType = z.enum([
  "SWAP",
  "SELL",
  "FUND",
  "SWAP_NG",
  "SELL_NG",
  "FUND_NG",
]);

const schemaExchangeStartParams = z.object({
  exchangeType: schemaExchangeType,
});

const schemaExchangeStartResults = z.object({
  transactionId: z.string(),
});

export const schemaExchangeStart = {
  params: schemaExchangeStartParams,
  result: schemaExchangeStartResults,
};

export type ExchangeStart = {
  params: z.infer<typeof schemaExchangeStartParams>;
  result: z.infer<typeof schemaExchangeStartResults>;
};

export type ExchangeStartHandler = (
  params: ExchangeStart["params"],
) => ExchangeStart["result"];
