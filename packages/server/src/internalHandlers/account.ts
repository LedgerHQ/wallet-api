import {
  Account,
  AccountList,
  AccountReceive,
  AccountRequest,
  Currency,
  RpcError,
  schemaAccountList,
  schemaAccountReceive,
  schemaAccountRequest,
  serializeAccount,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom, map } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

function filterAccountsByCurrencyIds(
  accounts: Account[],
  currencyIds: string[]
) {
  return accounts.filter((account) => currencyIds.includes(account.currency));
}

function filterCurrenciesByCurrencyIds(
  currencies: Currency[],
  currencyIds: string[]
) {
  return currencies.filter((currency) => currencyIds.includes(currency.id));
}

export const request: RPCHandler<AccountRequest["result"]> = async (
  req,
  context,
  handlers
) => {
  const safeParams = schemaAccountRequest.params.parse(req.params);

  const { currencyIds } = safeParams;

  const walletHandler = handlers["account.request"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const filteredAccounts$ = context.accounts$.pipe(
    map((accounts) => filterAccountsByCurrencyIds(accounts, currencyIds))
  );

  const filteredCurrencies$ = context.currencies$.pipe(
    map((currencies) => filterCurrenciesByCurrencyIds(currencies, currencyIds))
  );

  const account = await walletHandler({
    currencies$: filteredCurrencies$,
    accounts$: filteredAccounts$,
  });

  return {
    rawAccount: serializeAccount(account),
  };
};

export const list: RPCHandler<AccountList["result"]> = async (req, context) => {
  console.log("PARAMS: ", req.params);
  const safeParams = schemaAccountList.params.parse(req.params);

  const { currencyIds } = safeParams;

  const filteredAccounts$ = context.accounts$.pipe(
    map((accounts) => filterAccountsByCurrencyIds(accounts, currencyIds))
  );
  const accounts = await firstValueFrom(filteredAccounts$);

  return {
    rawAccounts: accounts.map(serializeAccount),
  };
};

export const receive: RPCHandler<AccountReceive["result"]> = async (
  req,
  context,
  handlers
) => {
  const safeParams = schemaAccountReceive.params.parse(req.params);
  const { accountId } = safeParams;

  const accounts = await firstValueFrom(context.accounts$);

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new RpcError(ACCOUNT_NOT_FOUND);
  }

  const walletHandler = handlers["account.receive"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const result = await walletHandler({ account });

  return {
    address: result,
  };
};
