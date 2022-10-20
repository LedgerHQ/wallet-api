import { arrayOf, objectOf, primitives } from "@altostra/type-validations";
import { JSONRPC, RFC } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

const validateCurrencyList = objectOf<RFC.AccountRequestParams>({
  currencies: arrayOf(primitives.string),
});

export const list: RPCHandler<RFC.CurrencyListResult> = async (
  req,
  context
) => {
  if (!validateCurrencyList(req.params)) {
    throw new JSONRPC.RpcError({
      code: JSONRPC.RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const currencies = await firstValueFrom(context.currencies$);

  return {
    currencies,
  };
};
