import { objectOf, primitives } from "@altostra/type-validations";
import { JSONRPC, RFC } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

const validateMessageSign = objectOf<RFC.MessageSignParams>({
  accountId: primitives.string,
  hexMessage: primitives.string,
});

export const sign: RPCHandler<
  RFC.MessageSignResult
> = async (req, context, handlers) => {
  if (!validateMessageSign(req.params)) {
    throw new JSONRPC.RpcError({
      code: JSONRPC.RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, hexMessage } = req.params;

  const account = accounts.find(account => account.id === accountId);

  if (!account) {
    throw new JSONRPC.RpcError(ACCOUNT_NOT_FOUND);
  }

  const walletHandler = handlers[RFC.MethodId.MESSAGE_SIGN];

  if (!walletHandler) {
    throw new JSONRPC.RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const signedMessage = await walletHandler({ account, message: Buffer.from(hexMessage, "hex") });

  return {
    hexSignedMessage: signedMessage.toString("hex"),
  };
};
