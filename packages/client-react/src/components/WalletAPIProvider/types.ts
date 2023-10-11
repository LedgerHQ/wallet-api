import type {
  Account,
  Currency,
  Logger,
  Transport,
  WalletAPIClient,
  WalletInfo,
} from "@ledgerhq/wallet-api-client";
import type { PropsWithChildren } from "react";

export type Loadable<T> = {
  loading: boolean;
  updatedAt: Date | null;
  error: unknown;
  value: T | null;
};

export type WalletAPIProviderProps = PropsWithChildren<{
  transport: Transport;
  logger: Logger;
  getCustomModule?: ConstructorParameters<typeof WalletAPIClient>["2"];
}>;

export type WalletAPIProviderContextState = {
  accounts: Loadable<Account[]>;
  currencies: Loadable<Currency[]>;
  capabilities: Loadable<string[]>;
  walletInfo: Loadable<WalletInfo["result"]>;
  userId: Loadable<string>;
};

export type WalletAPIProviderContextValue = {
  client?: WalletAPIClient;
  state: WalletAPIProviderContextState;
  setState: React.Dispatch<React.SetStateAction<WalletAPIProviderContextState>>;
};
