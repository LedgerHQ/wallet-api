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

/**
 * A unit describes a given representation of a currency for humans. A currency can have many units, for instance, we can assume Euro have euros and cents. We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).
 *
 * @remarks
 * This is a slightly modified subset of the Unit type used by the Ledger Live platform.
 *
 * @see {@link https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/currency.md#unit|Unit reference} in Ledger Live Common doc for more informations
 */
export type Unit = {
  /**
   * Display name of a given unit (example: satoshi)
   */
  name: string;
  /**
   * String to use when formatting the unit. like 'BTC' or 'USD'
   */
  code: string;
  /**
   * Number of digits after the '.' in context of this unit
   */
  magnitude: number;
};

/**
 * Base currency model
 */
export type BaseCurrency = {
  /**
   * Used for UI
   */
  color: string;
  /**
   * The ticker name in exchanges / countervalue apis (e.g. BTC, ETH, USDT).
   */
  ticker: string;
  /**
   * The unique internal id of the currency
   */
  id: string;
  /**
   * The display name of the currency
   */
  name: string;
  /**
   * Array of available [[Unit | units]] for the currency
   */
  units: Unit[];
};

/**
 * Crypto currency model
 */
export type CryptoCurrency = BaseCurrency & {
  /**
   * Represents the currency type.
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: CurrencyType.CryptoCurrency;
  /**
   * The [[FAMILIES | family]] of the crypto currency
   */
  family: string;
};

/**
 * Token currency model
 */
export type TokenCurrency = BaseCurrency & {
  /**
   * Represents the currency type.
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: CurrencyType.TokenCurrency;
  /**
   * Parent crypto currency
   */
  parent: string;
};

/**
 * ERC20 token currency model
 */
export type ERC20TokenCurrency = TokenCurrency & {
  /**
   * Token Standard
   */
  standard: TokenStandard.ERC20;
  /**
   * EVM contract address
   */
  contract: string;
};

export type Currency = CryptoCurrency | ERC20TokenCurrency;
