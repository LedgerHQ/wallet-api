import { z } from "zod";
import { schemaRawAccount } from "../../accounts";

const schemaAccountSelectedEventParams = z.object({
  rawAccount: schemaRawAccount.nullable(),
});

const schemaAccountSelectedEventResults = z.object({});

export const schemaAccountSelectedEvent = {
  params: schemaAccountSelectedEventParams,
  result: schemaAccountSelectedEventResults,
};

export type AccountSelectedEvent = {
  params: z.infer<typeof schemaAccountSelectedEventParams>;
  result: z.infer<typeof schemaAccountSelectedEventResults>;
};

export type AccountSelectedEventHandler = (
  params: AccountSelectedEvent["params"]
) => AccountSelectedEvent["result"];

export interface AppHandlers {
  "event.account.updated": undefined;
  "event.account.selected": AccountSelectedEventHandler;
}
