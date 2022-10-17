import type { Account } from "@ledgerhq/wallet-api-core";
import type { SimpleJSONRPCMethod } from "json-rpc-2.0";
import type { ServerParams } from "..";
import filterByCurrencies from "../utils/filterByCurrencies";

const listAccounts: SimpleJSONRPCMethod<ServerParams> = (
  params,
  serverParams
): Account[] => {
  if (!serverParams || !serverParams.accounts) {
    return [];
  }

  const { accounts: serverAccounts, accountsNoToken: serverAccountsNoTokens } =
    serverParams;

  if (!params) {
    return serverAccounts;
  }

  const { params: methodParams } = params as {
    params?: {
      /**
       * Include tokens accounts in the results
       */
      includeTokens?: boolean;
      /**
       * Select a set of currencies by id to filter accounts against.
       * Globing is enabled
       */
      currencies?: string[];
    };
  };

  if (!methodParams) {
    return serverAccounts;
  }

  const { includeTokens, currencies } = methodParams;

  const listedAccounts = includeTokens
    ? serverAccounts
    : serverAccountsNoTokens || [];

  if (!currencies) {
    return listedAccounts;
  }

  const filteredAccounts = filterByCurrencies(
    listedAccounts,
    currencies,
    "currency"
  );

  return filteredAccounts;
};

export default listAccounts;
