import { z } from "zod";

export const schemaDeviceType = z.enum([
  "blue",
  "nanoS",
  "nanoSP",
  "nanoX",
  "stax",
]);

export type DeviceType = z.infer<typeof schemaDeviceType>;
