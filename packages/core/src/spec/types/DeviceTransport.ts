import { z } from "zod";

const schemaDeviceTransportParams = z.object({
  appName: z.string().optional(),
});

const schemaDeviceTransportResults = z.object({
  deviceId: z.string(),
});

export const schemaDeviceTransport = {
  params: schemaDeviceTransportParams,
  result: schemaDeviceTransportResults,
};

export type DeviceTransport = {
  params: z.infer<typeof schemaDeviceTransportParams>;
  result: z.infer<typeof schemaDeviceTransportResults>;
};

export type DeviceTransportHandler = (
  params: DeviceTransport["params"]
) => DeviceTransport["result"];
