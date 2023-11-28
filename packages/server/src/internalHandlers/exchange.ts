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
  handlers,
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
  handlers,
) => {
  const walletHandler = handlers["exchange.complete"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("exchange.complete"));
  }

  const safeParams = schemaExchangeComplete.params.parse(req.params);

  const accounts = await firstValueFrom(context.accounts$);

  const fromAccount = accounts.find(
    (acc) => acc.id === safeParams.fromAccountId,
  );

  if (!fromAccount) {
    throw new ServerError(createAccountNotFound(safeParams.fromAccountId));
  }

  // those params are common to all exchange types
  const commonParams = {
    provider: safeParams.provider,
    transaction: deserializeTransaction(safeParams.rawTransaction),
    signature: Buffer.from(safeParams.hexSignature, "hex"),
    binaryPayload: Buffer.from(safeParams.hexBinaryPayload, "hex"),
    fromAccount,
    feeStrategy: safeParams.feeStrategy,
    tokenCurrency: safeParams.tokenCurrency,
  };

  // if the exchange type is SWAP we need to process an extra parameter
  if (safeParams.exchangeType === "SWAP") {
    const toAccount = accounts.find((acc) => acc.id === safeParams.toAccountId);

    if (!toAccount) {
      throw new ServerError(createAccountNotFound(safeParams.toAccountId));
    }

    const transactionHash = await walletHandler({
      ...commonParams,
      exchangeType: safeParams.exchangeType,
      toAccount,
      swapId: safeParams.swapId,
      rate: safeParams.rate,
    });

    return { transactionHash };
  }

  // or else we proceed with SELL / FUND
  const transactionHash = await walletHandler({
    ...commonParams,
    exchangeType: safeParams.exchangeType,
  });

  return {
    transactionHash,
  };
};
