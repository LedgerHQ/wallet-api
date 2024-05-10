import type { Account, Currency } from "@ledgerhq/wallet-api-core";
import picomatch from "picomatch";

export function matchCurrencies(
  currencies: Currency[],
  patterns: string[],
): Currency[] {
  const matchers = patterns.reduce<picomatch.Matcher[]>((filtered, pattern) => {
    if (pattern) {
      filtered.push(picomatch(pattern));
    }
    return filtered;
  }, []);

  return currencies.filter((currency) =>
    matchers.some((matcher) => matcher(currency.id)),
  );
}

export function filterAccountsForCurrencies(
  accounts: Account[],
  currencies: Currency[],
): Account[] {
  const currencyIds = new Set(currencies.map((currency) => currency.id));

  return accounts.filter((account) => currencyIds.has(account.currency));
}
