import { CurrencyList, schemaCurrencyList } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

export const list: RPCHandler<CurrencyList["result"]> = async (
  req,
  context
) => {
  schemaCurrencyList.params.parse(req.params);

  const currencies = await firstValueFrom(context.currencies$);

  return {
    currencies,
  };
};
