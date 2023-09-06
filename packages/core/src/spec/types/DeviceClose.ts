import { z } from "zod";

const schemaDeviceCloseParams = z.object({
  transportId: z.string(),
});

const schemaDeviceCloseResults = z.object({
  transportId: z.string(),
});

export const schemaDeviceClose = {
  params: schemaDeviceCloseParams,
  result: schemaDeviceCloseResults,
};

export type DeviceClose = {
  params: z.infer<typeof schemaDeviceCloseParams>;
  result: z.infer<typeof schemaDeviceCloseResults>;
};

export type DeviceCloseHandler = (
  params: DeviceClose["params"],
) => DeviceClose["result"];
