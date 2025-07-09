import { z } from "zod";

export const schemaDeviceType = z.enum([
  "blue",
  "nanoS",
  "nanoSP",
  "nanoX",
  "stax",
  "europa",
  "apex",
]);

export type DeviceType = z.infer<typeof schemaDeviceType>;
