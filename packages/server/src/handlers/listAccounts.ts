import { Account, CurrencyType } from "@ledgerhq/wallet-api-core";
import type { SimpleJSONRPCMethod } from "json-rpc-2.0";
import type { ServerParams } from "..";

const listAccounts: SimpleJSONRPCMethod<ServerParams> = (
  params,
  serverParams
): Account[] => {
  if (!serverParams || !serverParams.accounts || !serverParams.currencies) {
    return [];
  }

  const { accounts: serverAccounts, currencies: serverCurrencies } =
    serverParams;

  if (!params) {
    return serverAccounts;
  }

  const { params: methodParams } = params as {
    params?: {
      /**
       * Include tokens in the results
       */
      includeTokens?: boolean;
      // TODO: add `currencies` filter as in listCurrencies
      // cf. https://github.com/LedgerHQ/wallet-api/issues/15
    };
  };

  if (!methodParams) {
    return serverAccounts;
  }

  const { includeTokens } = methodParams;

  const listedAccounts = includeTokens
    ? serverAccounts
    : serverAccounts.filter((account) => {
        // TODO: we should store `currencies` in a Map to quicky access a currency by it's id
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
        const currency = serverCurrencies.find(
          (c) => c.id === account.currency
        );

        return currency?.type === CurrencyType.CryptoCurrency;
      });

  return listedAccounts;
};

export default listAccounts;
