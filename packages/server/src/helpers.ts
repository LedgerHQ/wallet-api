import type { Account, Currency } from "@ledgerhq/wallet-api-core";
import picomatch from "picomatch";

export function matchCurrencies(
  currencies: Currency[],
  patterns: string[],
): Currency[] {
  const matchedCurrencies: Currency[] = [];
  const patternCount = patterns.length;
  const currencyCount = currencies.length;

  for (let i = 0; i < patternCount; i += 1) {
    const currentPattern = patterns[i];
    if (currentPattern) {
      const isMatch = picomatch(currentPattern);

      for (let j = 0; j < currencyCount; j += 1) {
        const currentCurrency = currencies[j];
        if (currentCurrency) {
          if (isMatch(currentCurrency.id)) {
            matchedCurrencies.push(currentCurrency);
          }
        }
      }
    }
  }
  return matchedCurrencies;
}

export function filterAccountsForCurrencies(
  accounts: Account[],
  currencies: Currency[],
): Account[] {
  const currencyIds = new Set(currencies.map((currency) => currency.id));

  return accounts.filter((account) => currencyIds.has(account.currency));
}
