import {
  createNotImplementedByWallet,
  deserializeTransaction,
  ExchangeComplete,
  ExchangeStart,
  schemaExchangeComplete,
  schemaExchangeStart,
  ServerError,
} from "@ledgerhq/wallet-api-core";
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
  _context,
  handlers,
) => {
  const walletHandler = handlers["exchange.complete"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("exchange.complete"));
  }

  const safeParams = schemaExchangeComplete.params.parse(req.params);

  // those params are common to all exchange types
  const commonParams = {
    provider: safeParams.provider,
    transaction: deserializeTransaction(safeParams.rawTransaction),
    signature: Buffer.from(safeParams.hexSignature, "hex"),
    binaryPayload: Buffer.from(safeParams.hexBinaryPayload, "hex"),
    fromAccountId: safeParams.fromAccountId,
    feeStrategy: safeParams.feeStrategy,
    tokenCurrency: safeParams.tokenCurrency,
  } satisfies Partial<Parameters<typeof walletHandler>[0]>;

  // if the exchange type is SWAP we need to process an extra parameter
  if (safeParams.exchangeType === "SWAP") {
    const transactionHash = await walletHandler({
      ...commonParams,
      exchangeType: safeParams.exchangeType,
      toAccountId: safeParams.toAccountId,
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
