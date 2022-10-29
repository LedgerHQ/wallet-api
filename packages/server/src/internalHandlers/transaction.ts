import { maybe, objectOf, primitives } from "@altostra/type-validations";
import {
  RFC,
  isRawTransaction,
  deserializeTransaction,
  RpcError,
  RpcErrorCode,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import { ACCOUNT_NOT_FOUND, NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler2 } from "../types";

const validateTranactionOptions = objectOf<RFC.TransactionOptions>({
  hwAppId: primitives.maybeString,
});

const validateTransactionSign = objectOf<RFC.TransactionSignParams>({
  accountId: primitives.string,
  rawTransaction: isRawTransaction,
  options: maybe(validateTranactionOptions),
});

export const sign: RPCHandler2<
  RFC.TransactionSignParams,
  RFC.TransactionSignResult
> = async (req, context, handlers) => {
  if (!validateTransactionSign(req.params)) {
    throw new RpcError({
      code: RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = req.params;

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

const validateTransactionSignAndBroadcast =
  objectOf<RFC.TransactionSignAndBroadcastParams>({
    accountId: primitives.string,
    rawTransaction: isRawTransaction,
    options: maybe(validateTranactionOptions),
  });

export const signAndBroadcast: RPCHandler2<
  RFC.TransactionSignAndBroadcastParams,
  RFC.TransactionSignAndBroadcastResult
> = async (req, context, handlers) => {
  const walletHandler = handlers["transaction.signAndBroadcast"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  if (!validateTransactionSignAndBroadcast(req.params)) {
    throw new RpcError({
      code: RpcErrorCode.INVALID_PARAMS,
      message: "Bad parameters",
    });
  }

  const accounts = await firstValueFrom(context.accounts$);

  const { accountId, rawTransaction, options } = req.params;

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
