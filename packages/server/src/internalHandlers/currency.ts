import {
  Currency,
  CurrencyList,
  schemaCurrencyList,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

function filterCurrenciesByCurrencyIds(
  currencies: Currency[],
  currencyIds: string[],
) {
  const currencyIdsSet = new Set(currencyIds);

  return currencies.filter((currency) => currencyIdsSet.has(currency.id));
}

export const list: RPCHandler<CurrencyList["result"]> = async (
  req,
  context,
) => {
  const safeParams = schemaCurrencyList.params.parse(req.params);

  const { currencyIds } = safeParams ?? {};

  const allCurrencies = await firstValueFrom(context.currencies$);

  return {
    currencies: currencyIds
      ? filterCurrenciesByCurrencyIds(allCurrencies, currencyIds)
      : allCurrencies,
  };
};
