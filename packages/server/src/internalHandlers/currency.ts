import { arrayOf, objectOf, primitives } from "@altostra/type-validations";
import { RFC, RpcError, RpcErrorCode } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

const validateCurrencyList = objectOf<RFC.AccountRequestParams>({
  currencyIds: arrayOf(primitives.string),
});

export const list: RPCHandler<RFC.CurrencyListResult> = async (
  req,
  context
) => {
  if (!validateCurrencyList(req.params)) {
    throw new RpcError({
      code: RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const currencies = await firstValueFrom(context.currencies$);

  return {
    currencies,
  };
};
