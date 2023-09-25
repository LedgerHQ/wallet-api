import type { WalletAPIServer } from "@ledgerhq/wallet-api-server";
import type { SimulatorProfile } from "./types";

export function applyProfile(
  serverInstance: WalletAPIServer,
  profile: SimulatorProfile,
) {
  serverInstance.setAccounts(profile.accounts);
  serverInstance.setCurrencies(profile.currencies);
  serverInstance.setPermissions(profile.permissions);
  serverInstance.setHandlers(profile.methods);
}
