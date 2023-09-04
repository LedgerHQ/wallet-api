import { z } from "zod";
import { schemaDeviceType } from "./Device";

const schemaDeviceTransportParams = z.object({
  /** Select the BOLOS App. If undefined selects BOLOS */
  appName: z.string().optional(),
  /**
   * Checks the BOLOS App version range. If undefined no checks
   * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
   */
  appVersionRange: z.string().optional(),
  /**
   * Checks the BOLOS Firmware version range. If undefined no checks
   * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
   */
  firmwareVersionRange: z.string().optional(),
  /**
   * Checks if the device is seeded. If undefined no checks
   */
  seeded: z.boolean().optional(),
  /**
   * Checks if the device matches one of the types. If undefined no checks
   */
  devices: schemaDeviceType.array().nonempty().optional(),
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
  params: DeviceTransport["params"],
) => DeviceTransport["result"];
