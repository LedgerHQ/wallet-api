import {
  BitcoinGetAddress,
  BitcoinGetAddresses,
  BitcoinGetPublicKey,
  BitcoinGetXPub,
  BitcoinSignPsbt,
  createNotImplementedByWallet,
  schemaBitcoinGetAddress,
  schemaBitcoinGetAddresses,
  schemaBitcoinGetPublicKey,
  schemaBitcoinGetXPub,
  schemaBitcoinSignPsbt,
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

export const getAddresses: RPCHandler<BitcoinGetAddresses["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const walletHandler = handlers["bitcoin.getAddresses"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.getAddresses"));
  }

  const safeParams = schemaBitcoinGetAddresses.params.parse(req.params);

  const { accountId, intentions } = safeParams;

  // Ledger only supports "payment"; ignore unsupported intentions
  const supportedIntentions = intentions?.filter((i) => i === "payment");

  if (intentions && intentions.length > 0 && !supportedIntentions?.length) {
    return { addresses: [] };
  }

  return {
    addresses: await walletHandler({
      accountId,
      intentions: intentions ? supportedIntentions : undefined,
    }),
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

export const signPsbt: RPCHandler<BitcoinSignPsbt["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaBitcoinSignPsbt.params.parse(req.params);

  const { accountId, psbt, broadcast } = safeParams;

  const walletHandler = handlers["bitcoin.signPsbt"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.signPsbt"));
  }

  const { psbtSigned, txHash } = await walletHandler({
    accountId,
    psbt,
    broadcast,
  });

  return {
    psbtSigned,
    txHash,
  };
};
