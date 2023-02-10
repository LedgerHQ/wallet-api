import {
  createAccountNotFound,
  createNotImplementedByWallet,
  deserializeTransaction,
  ExchangeComplete,
  ExchangeStart,
  schemaExchangeComplete,
  schemaExchangeStart,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import { firstValueFrom } from "rxjs";
import type { RPCHandler } from "../types";

export const start: RPCHandler<ExchangeStart["result"]> = async (
  req,
  _context,
  handlers
) => {
  const walletHandler = handlers["exchange.start"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("exchange.start"));
  }

  const safeParams = schemaExchangeStart.params.parse(req.params);

  const transactionId = await walletHandler({
    exchangeType: safeParams.exchangeType,
  });

  return {
    transactionId,
  };
};

export const complete: RPCHandler<ExchangeComplete["result"]> = async (
  req,
  context,
  handlers
) => {
  const walletHandler = handlers["exchange.complete"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("exchange.complete"));
  }

  const safeParams = schemaExchangeComplete.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const fromAccount = accounts.find(
    (acc) => acc.id === safeParams.fromAccountId
  );

  const toAccount =
    safeParams.exchangeType === "SWAP"
      ? accounts.find((acc) => acc.id === safeParams.toAccountId)
      : undefined;

  if (!fromAccount) {
    throw new ServerError(createAccountNotFound(safeParams.fromAccountId));
  }

  if (safeParams.exchangeType === "SWAP" && !toAccount) {
    throw new ServerError(createAccountNotFound(safeParams.toAccountId));
  }

  const transactionHash = await walletHandler({
    provider: safeParams.provider,
    transaction: deserializeTransaction(safeParams.rawTransaction),
    signature: Buffer.from(safeParams.hexSignature, "hex"),
    binaryPayload: Buffer.from(safeParams.hexBinaryPayload, "hex"),
    fromAccount,
    toAccount,
    feeStrategy: safeParams.feeStrategy,
    exchangeType: safeParams.exchangeType,
  });

  return {
    transactionHash,
  };
};
