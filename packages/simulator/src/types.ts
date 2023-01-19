import type { Account, Currency, Permission } from "@ledgerhq/wallet-api-core";
import type { ServerConfig, WalletHandlers } from "@ledgerhq/wallet-api-server";

export type SimulatorProfile = {
  config: ServerConfig;
  permissions: Permission;
  accounts: Account[];
  currencies: Currency[];
  methods: Partial<WalletHandlers>;
};
