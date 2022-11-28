import TransportHttp from "@ledgerhq/hw-transport-http";
import type { HWTransport } from "@ledgerhq/wallet-api-client";
import type { SimulatorProfile } from "../../types";
import { standardProfile } from "../standard";

const deviceProxyUrl = process.env["DEVICE_PROXY_URL"];
const httpTransport = deviceProxyUrl
  ? TransportHttp(deviceProxyUrl.split("|"))
  : undefined;
let transport: HWTransport | undefined;

export const deviceProfile: SimulatorProfile = {
  ...standardProfile,
  permissions: {
    ...standardProfile.permissions,
    methodIds: [
      ...standardProfile.permissions.methodIds,
      "device.transport",
      "device.exchange",
      "device.close",
    ],
  },
  methods: {
    ...standardProfile.methods,
    "device.transport": async () => {
      if (!httpTransport) {
        throw new Error("Proxy not setup");
      }
      if (transport) {
        throw new Error("Transport already opened");
      }
      transport = await httpTransport.create(3000, 5000);
      return "1";
    },
    "device.exchange": async ({ apduHex, deviceId }) => {
      if (!transport) {
        throw new Error("No open transport to close");
      }
      if (deviceId !== "1") {
        // We should probably rename deviceId to transportId
        throw new Error("No transport open with this deviceId");
      }
      return (await transport.exchange(Buffer.from(apduHex, "hex"))).toString(
        "hex"
      );
    },
    "device.close": async ({ deviceId }) => {
      if (!transport) {
        throw new Error("No open transport to close");
      }
      if (deviceId !== "1") {
        // We should probably rename deviceId to transportId
        throw new Error("No transport open with this deviceId");
      }
      await transport.close();
      transport = undefined;
      return "1";
    },
  },
};
