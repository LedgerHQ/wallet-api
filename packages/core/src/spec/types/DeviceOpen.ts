import { z } from "zod";

const schemaDeviceOpenParams = z.object({
  /** ID of the device to select */
  deviceId: z.string(),
});

const schemaDeviceOpenResults = z.object({
  transportId: z.string(),
});

export const schemaDeviceOpen = {
  params: schemaDeviceOpenParams,
  result: schemaDeviceOpenResults,
};

export type DeviceOpen = {
  params: z.infer<typeof schemaDeviceOpenParams>;
  result: z.infer<typeof schemaDeviceOpenResults>;
};

export type DeviceOpenHandler = (
  params: DeviceOpen["params"],
) => DeviceOpen["result"];
