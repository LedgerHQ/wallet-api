import { objectOf, primitives } from "@altostra/type-validations";
import {
  JSONRPC,
  RFC,
  isRawTransaction,
  deserializeTransaction,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

const validateTransactionSign = objectOf<RFC.TransactionSignParams>({
  accountId: primitives.string,
  rawTransaction: isRawTransaction,
  options: objectOf<RFC.TransactionOptions>({
    hwAppId: primitives.maybeString,
  }),
});

export const sign: RPCHandler<RFC.TransactionSignResult> = async (
  req,
  context,
  handlers
) => {
  if (!validateTransactionSign(req.params)) {
    throw new JSONRPC.RpcError({
      code: JSONRPC.RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = req.params;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new JSONRPC.RpcError(ACCOUNT_NOT_FOUND);
  }

  const walletHandler = handlers[RFC.MethodId.TRANSACTION_SIGN];

  if (!walletHandler) {
    throw new JSONRPC.RpcError(NOT_IMPLEMENTED_BY_WALLET);
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

const validateTransactionSignAndBroadcast =
  objectOf<RFC.TransactionSignAndBroadcastParams>({
    accountId: primitives.string,
    rawTransaction: isRawTransaction,
    options: objectOf<RFC.TransactionOptions>({
      hwAppId: primitives.maybeString,
    }),
  });

export const signAndBroadcast: RPCHandler<
  RFC.TransactionSignAndBroadcastResult
> = async (req, context, handlers) => {
  if (!validateTransactionSignAndBroadcast(req.params)) {
    throw new JSONRPC.RpcError({
      code: JSONRPC.RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = req.params;

  const account = accounts.find((acc) => acc.id === accountId);

  if (!account) {
    throw new JSONRPC.RpcError(ACCOUNT_NOT_FOUND);
  }

  const walletHandler = handlers[RFC.MethodId.TRANSACTION_SIGN_AND_BROADCAST];

  if (!walletHandler) {
    throw new JSONRPC.RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const transactionHash = await walletHandler({
    account,
    transaction: deserializeTransaction(rawTransaction),
    options,
  });

  return {
    transactionHash: transactionHash.toString("hex"),
  };
};