import { z } from "zod";

const schemaMessageSignParams = z.object({
  accountId: z.string(),
  hexMessage: z.string(),
  meta: z.record(z.string(), z.unknown()).optional(),
});

const schemaMessageSignResults = z.object({
  hexSignedMessage: z.string(),
});

export const schemaMessageSign = {
  params: schemaMessageSignParams,
  result: schemaMessageSignResults,
};

export type MessageSign = {
  params: z.infer<typeof schemaMessageSignParams>;
  result: z.infer<typeof schemaMessageSignResults>;
};

export type MessageSignHandler = (
  params: MessageSign["params"],
) => MessageSign["result"];
