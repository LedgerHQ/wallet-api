import { Currency, CurrencyType } from "@ledgerhq/wallet-api-core";
import type { SimpleJSONRPCMethod } from "json-rpc-2.0";
import type { ServerParams } from "..";
import globStringToRegex from "../utils/globStringToRegex";

const listCurrencies: SimpleJSONRPCMethod<ServerParams> = (
  params,
  serverParams
): Currency[] => {
  if (!serverParams || !serverParams.currencies) {
    return [];
  }

  const { currencies: serverCurrencies } = serverParams;

  if (!params) {
    return serverCurrencies;
  }

  const { params: methodParams } = params as {
    params?: {
      /**
       * Include tokens in the results
       */
      includeTokens?: boolean;
      /**
       * Select a set of currencies by id. Globing is enabled
       */
      currencies?: string[];
    };
  };

  if (!methodParams) {
    return serverCurrencies;
  }

  const { includeTokens, currencies } = methodParams;

  const listedCurrencies = includeTokens
    ? serverCurrencies
    : serverCurrencies.filter(
        (currency) => currency.type === CurrencyType.CryptoCurrency
      );

  if (!currencies) {
    return listedCurrencies;
  }

  const filteredCurrencies = listedCurrencies.filter((currency) => {
    // Test if a specific currency is allowed based on provided filters
    return currencies.some((filter) => {
      const re = globStringToRegex(filter);

      return currency.id.match(re);
    });
  });

  return filteredCurrencies;
};

export default listCurrencies;
