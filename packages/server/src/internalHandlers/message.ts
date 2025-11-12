import {
  createNotImplementedByWallet,
  MessageSign,
  schemaMessageSign,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const sign: RPCHandler<MessageSign["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const walletHandler = handlers["message.sign"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("message.sign"));
  }

  const safeParams = schemaMessageSign.params.parse(req.params);

  const { accountId, hexMessage, options, meta } = safeParams;

  const signedMessage = await walletHandler({
    accountId,
    message: Buffer.from(hexMessage, "hex"),
    options,
    meta,
  });

  return {
    hexSignedMessage: signedMessage.toString("hex"),
  };
};
