import {
  deserializeTransaction,
  RpcError,
  schemaTransactionSign,
  schemaTransactionSignAndBroadcast,
  TransactionSign,
  TransactionSignAndBroadcast,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

export const sign: RPCHandler<TransactionSign["result"]> = async (
  req,
  context,
  handlers
) => {
  const safeParams = schemaTransactionSign.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = safeParams;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new RpcError(ACCOUNT_NOT_FOUND);
  }

  const walletHandler = handlers["transaction.sign"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const signedTransaction = await walletHandler({
    account,
    transaction: deserializeTransaction(rawTransaction),
    options,
  });

  return {
    signedTransactionHex: signedTransaction.toString("hex"),
  };
};

export const signAndBroadcast: RPCHandler<
  TransactionSignAndBroadcast["result"]
> = async (req, context, handlers) => {
  const walletHandler = handlers["transaction.signAndBroadcast"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const safeParams = schemaTransactionSignAndBroadcast.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = safeParams;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new RpcError(ACCOUNT_NOT_FOUND);
  }

  const transactionHash = await walletHandler({
    account,
    transaction: deserializeTransaction(rawTransaction),
    options,
  });

  return {
    transactionHash,
  };
};
