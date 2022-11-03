import {
  MessageSign,
  RpcError,
  schemaMessageSign,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

export const sign: RPCHandler<MessageSign["result"]> = async (
  req,
  context,
  handlers
) => {
  const walletHandler = handlers["message.sign"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const safeParams = schemaMessageSign.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, hexMessage } = safeParams;

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
