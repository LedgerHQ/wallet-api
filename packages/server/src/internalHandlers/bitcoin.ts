import {
  BitcoinGetXPub,
  createNotImplementedByWallet,
  schemaBitcoinGetXPub,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const getXPub: RPCHandler<BitcoinGetXPub["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const walletHandler = handlers["bitcoin.getXPub"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.getXPub"));
  }

  const safeParams = schemaBitcoinGetXPub.params.parse(req.params);

  const { accountId } = safeParams;

  return {
    xPub: await walletHandler({ accountId }),
  };
};
