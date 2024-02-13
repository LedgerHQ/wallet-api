import {
  Account,
  AccountList,
  AccountReceive,
  AccountRequest,
  createAccountNotFound,
  createNotImplementedByWallet,
  Currency,
  schemaAccountList,
  schemaAccountReceive,
  schemaAccountRequest,
  serializeAccount,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom, map } from "rxjs";
import type { RPCHandler } from "../types";

function filterAccountsByCurrencyIds(
  accounts: Account[],
  currencyIds: string[],
) {
  return accounts.filter((account) => currencyIds.includes(account.currency));
}

function filterCurrenciesByCurrencyIds(
  currencies: Currency[],
  currencyIds: string[],
) {
  return currencies.filter((currency) => currencyIds.includes(currency.id));
}

export const request: RPCHandler<AccountRequest["result"]> = async (
  req,
  context,
  handlers,
) => {
  const safeParams = schemaAccountRequest.params.parse(req.params);

  const { currencyIds } = safeParams;

  const walletHandler = handlers["account.request"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("account.request"));
  }

  const filteredAccounts$ = currencyIds
    ? context.accounts$.pipe(
        map((accounts) => filterAccountsByCurrencyIds(accounts, currencyIds)),
      )
    : context.accounts$;

  const filteredCurrencies$ = currencyIds
    ? context.currencies$.pipe(
        map((currencies) =>
          filterCurrenciesByCurrencyIds(currencies, currencyIds),
        ),
      )
    : context.currencies$;

  const account = await walletHandler({
    currencies$: filteredCurrencies$,
    accounts$: filteredAccounts$,
  });

  return {
    rawAccount: serializeAccount(account),
  };
};

export const list: RPCHandler<AccountList["result"]> = async (req, context) => {
  const safeParams = schemaAccountList.params.parse(req.params);

  const { currencyIds } = safeParams ?? {};

  const filteredAccounts$ = currencyIds
    ? context.accounts$.pipe(
        map((accounts) => filterAccountsByCurrencyIds(accounts, currencyIds)),
      )
    : context.accounts$;

  const accounts = await firstValueFrom(filteredAccounts$);

  return {
    rawAccounts: accounts.map(serializeAccount),
  };
};

export const receive: RPCHandler<AccountReceive["result"]> = async (
  req,
  context,
  handlers,
) => {
  const safeParams = schemaAccountReceive.params.parse(req.params);
  const { accountId, tokenCurrency } = safeParams;

  const accounts = await firstValueFrom(context.accounts$);

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new ServerError(createAccountNotFound(accountId));
  }

  const walletHandler = handlers["account.receive"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("account.receive"));
  }

  const result = await walletHandler({ account, tokenCurrency });

  return {
    address: result,
  };
};
