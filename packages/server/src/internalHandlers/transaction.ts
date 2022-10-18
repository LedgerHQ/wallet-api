import { objectOf, primitives } from "@altostra/type-validations";
import { string } from "@altostra/type-validations/lib/primitives";
import { JSONRPC, RawTransaction, RFC } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

const validateTransactionSign = objectOf<RFC.TransactionSignParams>({
  accountId: primitives.string,
  rawTransaction: primitives.unknown,
});

export const sign: RPCHandler<
  RFC.TransactionSignResult
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
