import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { getSimulatorTransport, profiles } from "../src";

describe("Simulator", () => {
  describe("bitcoin.getXPub", () => {
    it("should return the xpub", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const xPub = await client.bitcoin.getXPub("accountId");

      expect(xPub).toBe("xpub");
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "permission"
      );
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "not implemented"
      );
    });
  });
});
