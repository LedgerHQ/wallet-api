import {
  createAccountNotFound,
  createNotImplementedByWallet,
  MessageSign,
  schemaMessageSign,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

export const sign: RPCHandler<MessageSign["result"]> = async (
  req,
  context,
  handlers,
) => {
  const walletHandler = handlers["message.sign"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("message.sign"));
  }

  const safeParams = schemaMessageSign.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, hexMessage, meta } = safeParams;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new ServerError(createAccountNotFound(accountId));
  }

  const signedMessage = await walletHandler({
    account,
    message: Buffer.from(hexMessage, "hex"),
    meta,
  });

  return {
    hexSignedMessage: signedMessage.toString("hex"),
  };
};
