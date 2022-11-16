import type { Account, Currency, Permission } from "@ledgerhq/wallet-api-core";
import type { WalletHandlers } from "@ledgerhq/wallet-api-server";

export type SimulatorProfile = {
  permissions: Permission;
  accounts: Account[];
  currencies: Currency[];
  methods: Partial<WalletHandlers>;
};
