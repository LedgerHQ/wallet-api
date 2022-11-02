import { z } from "zod";
import { schemaFamilies } from "../families/common";

export const schemaCurrencyType = z.enum(["CryptoCurrency", "TokenCurrency"]);
export const schemaTokenStandard = z.enum(["ERC20"]);

export const schemaBaseCurrency = z.object({
  color: z.string(),
  ticker: z.string(),
  id: z.string(),
  name: z.string(),
  decimals: z.number(),
});

export const schemaCryptoCurrency = schemaBaseCurrency.extend({
  type: z.literal(schemaCurrencyType.enum.CryptoCurrency),
  family: schemaFamilies,
});

export const schemaTokenCurrency = schemaBaseCurrency.extend({
  type: z.literal(schemaCurrencyType.enum.TokenCurrency),
  parent: schemaCurrencyType,
});

export const schemaERC20TokenCurrency = schemaTokenCurrency.extend({
  standard: schemaTokenStandard,
  contract: z.string(),
});

export const schemaCurrency = z.discriminatedUnion("type", [
  schemaCryptoCurrency,
  schemaERC20TokenCurrency,
]);
