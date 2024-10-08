import {
  BitcoinGetAddress,
  BitcoinGetPublicKey,
  BitcoinGetXPub,
  createNotImplementedByWallet,
  schemaBitcoinGetAddress,
  schemaBitcoinGetPublicKey,
  schemaBitcoinGetXPub,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const getAddress: RPCHandler<BitcoinGetAddress["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const walletHandler = handlers["bitcoin.getAddress"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.getAddress"));
  }

  const safeParams = schemaBitcoinGetAddress.params.parse(req.params);

  const { accountId, derivationPath } = safeParams;

  return {
    address: await walletHandler({ accountId, derivationPath }),
  };
};

export const getPublicKey: RPCHandler<BitcoinGetPublicKey["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const walletHandler = handlers["bitcoin.getPublicKey"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.getPublicKey"));
  }

  const safeParams = schemaBitcoinGetPublicKey.params.parse(req.params);

  const { accountId, derivationPath } = safeParams;

  return {
    publicKey: await walletHandler({ accountId, derivationPath }),
  };
};

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
