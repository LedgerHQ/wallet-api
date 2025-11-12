import {
  AccountList,
  AccountReceive,
  AccountRequest,
  createNotImplementedByWallet,
  schemaAccountList,
  schemaAccountReceive,
  schemaAccountRequest,
  serializeAccount,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const request: RPCHandler<AccountRequest["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaAccountRequest.params.parse(req.params);

  const { currencyIds, showAccountFilter, drawerConfiguration, useCase } =
    safeParams;

  const walletHandler = handlers["account.request"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("account.request"));
  }

  const account = await walletHandler({
    currencyIds,
    showAccountFilter,
    drawerConfiguration,
    useCase,
    areCurrenciesFiltered: !!(currencyIds && currencyIds.length > 0),
  });

  return {
    rawAccount: serializeAccount(account),
  };
};

export const list: RPCHandler<AccountList["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaAccountList.params.parse(req.params);

  const { currencyIds } = safeParams ?? {};

  const walletHandler = handlers["account.list"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("account.list"));
  }

  const accounts = await walletHandler({
    currencyIds,
  });

  return {
    rawAccounts: accounts.map(serializeAccount),
  };
};

export const receive: RPCHandler<AccountReceive["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaAccountReceive.params.parse(req.params);
  const { accountId, tokenCurrency } = safeParams;

  const walletHandler = handlers["account.receive"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("account.receive"));
  }

  const result = await walletHandler({ accountId, tokenCurrency });

  return {
    address: result,
  };
};
