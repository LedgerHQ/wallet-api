import type { Account, Currency, Permission } from "@ledgerhq/wallet-api-core";
import type { ServerConfig, WalletHandlers } from "@ledgerhq/wallet-api-server";

export type SimulatorProfile = {
  debug?: boolean;
  config: ServerConfig;
  // TODO: remove omit<Permission, "currencyIds"> in next major release of core
  permissions: Omit<Permission, "currencyIds">;
  accounts: Account[];
  currencies: Currency[];
  methods:
    | Partial<WalletHandlers>
    | ((ctx: {
        accounts: Account[];
        currencies: Currency[];
      }) => Partial<WalletHandlers>);
};
