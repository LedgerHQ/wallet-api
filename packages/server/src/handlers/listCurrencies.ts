import type { Currency } from "@ledgerhq/wallet-api-core";
import type { SimpleJSONRPCMethod } from "json-rpc-2.0";
import type { ServerParams } from "..";
import filterByCurrencies from "../utils/filterByCurrencies";

const listCurrencies: SimpleJSONRPCMethod<ServerParams> = (
  params,
  serverParams
): Currency[] => {
  if (!serverParams || !serverParams.currencies) {
    return [];
  }

  const {
    currencies: serverCurrencies,
    currenciesNoToken: serverCurrenciesNoTokens,
  } = serverParams;

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
    : serverCurrenciesNoTokens || [];

  if (!currencies) {
    return listedCurrencies;
  }

  const filteredCurrencies = filterByCurrencies(
    listedCurrencies,
    currencies,
    "id"
  );

  return filteredCurrencies;
};

export default listCurrencies;
