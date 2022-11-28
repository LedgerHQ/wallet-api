import { z } from "zod";

const schemaDeviceTransportParams = z.object({
  appName: z.string().optional(),
  appVersionRange: z.string().optional(),
  firmwareVersionRange: z.string().optional(),
  seeded: z.boolean().optional(),
});

const schemaDeviceTransportResults = z.object({
  transportId: z.string(),
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
