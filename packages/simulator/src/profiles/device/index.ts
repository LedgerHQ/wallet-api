import HWTransport from "@ledgerhq/hw-transport";
import type { SimulatorProfile } from "../../types";
import { standardProfile } from "../standard";

export const deviceProfile: (
  mainTransport: typeof HWTransport,
) => SimulatorProfile = (mainTransport) => {
  let transport: HWTransport | undefined;

  return {
    ...standardProfile,
    permissions: {
      ...standardProfile.permissions,
      methodIds: [
        ...standardProfile.permissions.methodIds,
        "device.transport",
        "device.select",
        "device.open",
        "device.exchange",
        "device.close",
      ],
    },
    methods: {
      ...standardProfile.methods,
      "device.transport": async () => {
        if (transport) {
          throw new Error("Transport already opened");
        }
        transport = await mainTransport.create(3000, 5000);
        return "1";
      },
      "device.select": () => "",
      "device.open": async () => {
        if (transport) {
          throw new Error("Transport already opened");
        }
        transport = await mainTransport.create(3000, 5000);
        return "1";
      },
      "device.exchange": async ({ apduHex, transportId }) => {
        if (!transport) {
          throw new Error("No open transport to close");
        }
        if (transportId !== "1") {
          throw new Error("No transport open with this transportId");
        }
        return (await transport.exchange(Buffer.from(apduHex, "hex"))).toString(
          "hex",
        );
      },
      "device.close": async ({ transportId }) => {
        if (!transport) {
          throw new Error("No open transport to close");
        }
        if (transportId !== "1") {
          throw new Error("No transport open with this transportId");
        }
        await transport.close();
        transport = undefined;
        return "1";
      },
    },
  };
};
