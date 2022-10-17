import type { Account, Currency } from "@ledgerhq/wallet-api-core";
import globStringToRegex from "./globStringToRegex";

const filterByCurrencies = <
  Type extends Account | Currency,
  Key extends keyof Type
>(
  array: Type[],
  currenciesFilter: string[],
  key: Key
) => {
  const filtersRegexpMap = new Map<string, RegExp>();

  currenciesFilter.forEach((filter) => {
    const re = globStringToRegex(filter);
    filtersRegexpMap.set(filter, re);
  });

  const filtered = array.filter((element) => {
    // Test if a specific element is allowed based on provided currency filters
    return currenciesFilter.some((filter) => {
      const re = filtersRegexpMap.get(filter);

      /**
       * If the regexp is not found in the Map
       * This should not happen
       */
      if (!re) {
        return false;
      }

      // FIXME: could improve this type checking
      return (element[key] as string).match(re);
    });
  });

  return filtered;
};

export default filterByCurrencies;
