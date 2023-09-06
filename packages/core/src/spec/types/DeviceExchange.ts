import { z } from "zod";

const schemaDeviceExchangeParams = z.object({
  apduHex: z.string(),
  transportId: z.string(),
});

const schemaDeviceExchangeResults = z.object({
  responseHex: z.string(),
});

export const schemaDeviceExchange = {
  params: schemaDeviceExchangeParams,
  result: schemaDeviceExchangeResults,
};

export type DeviceExchange = {
  params: z.infer<typeof schemaDeviceExchangeParams>;
  result: z.infer<typeof schemaDeviceExchangeResults>;
};

export type DeviceExchangeHandler = (
  params: DeviceExchange["params"],
) => DeviceExchange["result"];
