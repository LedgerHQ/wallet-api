import { z } from "zod";
import { schemaRawTransaction } from "../../families";

const schemaFeeStrategyType = z.enum(["SLOW", "MEDIUM", "FAST"]);

const schemaExchangeCompleteBaseParams = z.object({
  provider: z.string(),
  fromAccountId: z.string(),
  rawTransaction: schemaRawTransaction,
  hexBinaryPayload: z.string(),
  hexSignature: z.string(),
  feeStrategy: schemaFeeStrategyType,
});

const schemaExchangeCompleteFundParams =
  schemaExchangeCompleteBaseParams.extend({
    exchangeType: z.literal("FUND"),
  });

const schemaExchangeCompleteSellParams =
  schemaExchangeCompleteBaseParams.extend({
    exchangeType: z.literal("SELL"),
  });

const schemaExchangeCompleteSwapParams =
  schemaExchangeCompleteBaseParams.extend({
    exchangeType: z.literal("SWAP"),
    toAccountId: z.string(),
  });

const schemaExchangeCompleteParams = z.discriminatedUnion("exchangeType", [
  schemaExchangeCompleteFundParams,
  schemaExchangeCompleteSellParams,
  schemaExchangeCompleteSwapParams,
]);

const schemaExchangeCompleteResults = z.object({
  transactionHash: z.string(),
});

export const schemaExchangeComplete = {
  params: schemaExchangeCompleteParams,
  result: schemaExchangeCompleteResults,
};

export type ExchangeComplete = {
  params: z.infer<typeof schemaExchangeCompleteParams>;
  result: z.infer<typeof schemaExchangeCompleteResults>;
};

export type ExchangeCompleteHandler = (
  params: ExchangeComplete["params"]
) => ExchangeComplete["result"];
