import { z } from "zod";

const schemaWalletCapabilitiesParams = z.object({});

const schemaWalletCapabilitiesResults = z.object({
  methodIds: z.array(z.string()),
});

export const schemaWalletCapabilities = {
  params: schemaWalletCapabilitiesParams,
  result: schemaWalletCapabilitiesResults,
};

export type WalletCapabilities = {
  params: z.infer<typeof schemaWalletCapabilitiesParams>;
  result: z.infer<typeof schemaWalletCapabilitiesResults>;
};

export type WalletCapabilitiesHandler = (
  params: WalletCapabilities["params"],
) => WalletCapabilities["result"];
