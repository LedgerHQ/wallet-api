import { z } from "zod";
import { schemaDeviceType } from "./Device";

const schemaDeviceSelectParams = z.object({
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

const schemaDeviceSelectResults = z.object({
  deviceId: z.string(),
});

export const schemaDeviceSelect = {
  params: schemaDeviceSelectParams,
  result: schemaDeviceSelectResults,
};

export type DeviceSelect = {
  params: z.infer<typeof schemaDeviceSelectParams>;
  result: z.infer<typeof schemaDeviceSelectResults>;
};

export type DeviceSelectHandler = (
  params: DeviceSelect["params"],
) => DeviceSelect["result"];
