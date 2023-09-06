import { z } from "zod";

const schemaBitcoinGetXPubParams = z.object({
  accountId: z.string(),
});

const schemaBitcoinGetXPubResults = z.object({
  xPub: z.string(),
});

export const schemaBitcoinGetXPub = {
  params: schemaBitcoinGetXPubParams,
  result: schemaBitcoinGetXPubResults,
};

export type BitcoinGetXPub = {
  params: z.infer<typeof schemaBitcoinGetXPubParams>;
  result: z.infer<typeof schemaBitcoinGetXPubResults>;
};

export type BitcoinGetXPubHandler = (
  params: BitcoinGetXPub["params"],
) => BitcoinGetXPub["result"];
