import { z } from "zod";

const schemaBitcoinGetAddressParams = z.object({
  accountId: z.string(),
  derivationPath: z.string().optional(),
});

const schemaBitcoinGetAddressResults = z.object({
  address: z.string(),
});

export const schemaBitcoinGetAddress = {
  params: schemaBitcoinGetAddressParams,
  result: schemaBitcoinGetAddressResults,
};

export type BitcoinGetAddress = {
  params: z.infer<typeof schemaBitcoinGetAddressParams>;
  result: z.infer<typeof schemaBitcoinGetAddressResults>;
};

export type BitcoinGetAddressHandler = (
  params: BitcoinGetAddress["params"],
) => BitcoinGetAddress["result"];
