import type {
  Account,
  Currency,
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
}>;

export type WalletAPIProviderContextState = {
  accounts: Loadable<Account[]>;
  currencies: Loadable<Currency[]>;
  capabilities: Loadable<string[]>;
  walletInfo: Loadable<WalletInfo["result"]>;
  userId: Loadable<string>;
};

export type WalletAPIProviderContextValue = {
  client: WalletAPIClient | null;
  state: WalletAPIProviderContextState;
  setState: React.Dispatch<React.SetStateAction<WalletAPIProviderContextState>>;
};
