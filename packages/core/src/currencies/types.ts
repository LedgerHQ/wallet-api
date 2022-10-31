import type { z } from "zod";
import type {
  schemaCryptoCurrency,
  schemaCurrency,
  schemaCurrencyType,
  schemaERC20TokenCurrency,
  schemaTokenStandard,
} from "./validation";

/**
 * Currency types
 */
export type CurrencyType = z.infer<typeof schemaCurrencyType>;

/**
 * Token standards
 */
export type TokenStandard = z.infer<typeof schemaTokenStandard>;

/**
 * Crypto currency model
 */
export type CryptoCurrency = z.infer<typeof schemaCryptoCurrency>;

/**
 * ERC20 token currency model
 */
export type ERC20TokenCurrency = z.infer<typeof schemaERC20TokenCurrency>;

export type Currency = z.infer<typeof schemaCurrency>;
