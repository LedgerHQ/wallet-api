import type { WalletAPIServer } from "@ledgerhq/wallet-api-server";
import type { SimulatorProfile } from "./types";

export function applyProfile(
  serverInstance: WalletAPIServer,
  profile: SimulatorProfile
) {
  serverInstance.setAccounts(profile.accounts);
  serverInstance.setCurrencies(profile.currencies);
  serverInstance.setPermissions(profile.permissions);

  const methodIds = Object.keys(profile.methods);

  methodIds.forEach((methodId) => {
    const key = methodId as keyof typeof profile.methods;
    const handler = profile.methods[key];
    if (handler) {
      serverInstance.setHandler(key, handler);
    }
  });
}
