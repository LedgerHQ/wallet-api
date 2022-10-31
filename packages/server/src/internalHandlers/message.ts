import { objectOf, primitives } from "@altostra/type-validations";
import { RFC, RpcError, RpcErrorCode } from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

const validateMessageSign = objectOf<RFC.MessageSignParams>({
  accountId: primitives.string,
  hexMessage: primitives.string,
});

export const sign: RPCHandler<RFC.MessageSignResult> = async (
  req,
  context,
  handlers
) => {
  const walletHandler = handlers["message.sign"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  if (!validateMessageSign(req.params)) {
    throw new RpcError({
      code: RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, hexMessage } = req.params;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new RpcError(ACCOUNT_NOT_FOUND);
  }

  const signedMessage = await walletHandler({
    account,
    message: Buffer.from(hexMessage, "hex"),
  });

  return {
    hexSignedMessage: signedMessage.toString("hex"),
  };
};
