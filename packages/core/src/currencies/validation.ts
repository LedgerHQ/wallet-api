import { z } from "zod";
import { schemaFamilies } from "../families/common";

/**
 * Currency types
 */
export enum CurrencyType {
  CryptoCurrency = "CryptoCurrency",
  TokenCurrency = "TokenCurrency",
}

/**
 * Token standards
 */
export enum TokenStandard {
  ERC20 = "ERC20",
}

export const schemaCurrencyType = z.nativeEnum(CurrencyType);
export const schemaTokenStandard = z.nativeEnum(TokenStandard);

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

/**
 * Crypto currency model
 */
export type CryptoCurrency = z.infer<typeof schemaCryptoCurrency>;

/**
 * ERC20 token currency model
 */
export type ERC20TokenCurrency = z.infer<typeof schemaERC20TokenCurrency>;

export type Currency = z.infer<typeof schemaCurrency>;
