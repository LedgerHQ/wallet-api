import {
  createAccountNotFound,
  BitcoinGetAddress,
  BitcoinGetPublicKey,
  BitcoinGetXPub,
  BitcoinSignPsbt,
  createNotImplementedByWallet,
  schemaBitcoinGetAddress,
  schemaBitcoinGetPublicKey,
  schemaBitcoinGetXPub,
  schemaBitcoinSignPsbt,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
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

export const signPsbt: RPCHandler<BitcoinSignPsbt["result"]> = async (
  req,
  context,
  handlers,
) => {
  const safeParams = schemaBitcoinSignPsbt.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, psbt, broadcast } = safeParams;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new ServerError(createAccountNotFound(accountId));
  }

  const walletHandler = handlers["bitcoin.signPsbt"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("bitcoin.signPsbt"));
  }

  const { psbtSigned, txHash } = await walletHandler({
    account,
    psbt,
    broadcast,
  });

  return {
    psbtSigned,
    txHash,
  };
};
