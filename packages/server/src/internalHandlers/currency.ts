import {
  createNotImplementedByWallet,
  CurrencyList,
  schemaCurrencyList,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const list: RPCHandler<CurrencyList["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaCurrencyList.params.parse(req.params);

  const { currencyIds } = safeParams ?? {};

  const walletHandler = handlers["currency.list"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("currency.list"));
  }

  const currencies = await walletHandler({ currencyIds });

  return {
    currencies,
  };
};
