import { z } from "zod";

const schemaAccountReceiveParams = z.object({
  accountId: z.string(),
});

const schemaAccountReceiveResults = z.object({
  address: z.string(),
});

export const schemaAccountReceive = {
  params: schemaAccountReceiveParams,
  result: schemaAccountReceiveResults,
};

export type AccountReceive = {
  params: z.infer<typeof schemaAccountReceiveParams>;
  result: z.infer<typeof schemaAccountReceiveResults>;
};

export type AccountReceiveHandler = (
  params: AccountReceive["params"]
) => AccountReceive["result"];
