import { z } from "zod";

const schemaWalletInfoParams = z.object({});

const schemaWalletInfoResults = z.object({
  tracking: z.boolean(),
  wallet: z.object({
    name: z.string(),
    version: z.string(),
  }),
});

export const schemaWalletInfo = {
  params: schemaWalletInfoParams,
  result: schemaWalletInfoResults,
};

export type WalletInfo = {
  params: z.infer<typeof schemaWalletInfoParams>;
  result: z.infer<typeof schemaWalletInfoResults>;
};

export type WalletInfoHandler = (
  params: WalletInfo["params"],
) => WalletInfo["result"];
