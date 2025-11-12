import {
  createNotImplementedByWallet,
  deserializeTransaction,
  schemaTransactionSign,
  schemaTransactionSignAndBroadcast,
  schemaTransactionSignRaw,
  ServerError,
  TransactionSign,
  TransactionSignAndBroadcast,
  TransactionSignRaw,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const sign: RPCHandler<TransactionSign["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaTransactionSign.params.parse(req.params);

  const { accountId, rawTransaction, options, meta, tokenCurrency } =
    safeParams;

  const walletHandler = handlers["transaction.sign"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("transaction.sign"));
  }

  const signedTransaction = await walletHandler({
    accountId,
    tokenCurrency,
    transaction: deserializeTransaction(rawTransaction),
    options,
    meta,
  });

  return {
    signedTransactionHex: signedTransaction.toString("hex"),
  };
};

export const signRaw: RPCHandler<TransactionSignRaw["result"]> = async (
  req,
  _context,
  handlers,
) => {
  const safeParams = schemaTransactionSignRaw.params.parse(req.params);

  const { accountId, rawTransaction, broadcast, options, meta } = safeParams;

  const walletHandler = handlers["transaction.signRaw"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("transaction.signRaw"));
  }

  const { signedTransactionHex, transactionHash } = await walletHandler({
    accountId,
    transaction: rawTransaction,
    broadcast,
    options,
    meta,
  });

  return {
    signedTransactionHex,
    transactionHash,
  };
};

export const signAndBroadcast: RPCHandler<
  TransactionSignAndBroadcast["result"]
> = async (req, _context, handlers) => {
  const walletHandler = handlers["transaction.signAndBroadcast"];

  if (!walletHandler) {
    throw new ServerError(
      createNotImplementedByWallet("transaction.signAndBroadcast"),
    );
  }

  const safeParams = schemaTransactionSignAndBroadcast.params.parse(req.params);

  const { accountId, rawTransaction, options, meta, tokenCurrency } =
    safeParams;

  const transactionHash = await walletHandler({
    accountId,
    tokenCurrency,
    transaction: deserializeTransaction(rawTransaction),
    options,
    meta,
  });

  return {
    transactionHash,
  };
};
