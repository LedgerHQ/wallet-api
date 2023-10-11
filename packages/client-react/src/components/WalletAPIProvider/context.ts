import { createContext } from "react";
import type { Loadable, WalletAPIProviderContextValue } from "./types";

function initialLoadableValue<T>(): Loadable<T> {
  return {
    updatedAt: null,
    loading: false,
    value: null,
    error: undefined,
  };
}

export const initialContextValue: WalletAPIProviderContextValue = {
  client: undefined,
  state: {
    accounts: initialLoadableValue(),
    currencies: initialLoadableValue(),
    capabilities: initialLoadableValue(),
    walletInfo: initialLoadableValue(),
    userId: initialLoadableValue(),
  },
  setState: () => {
    return;
  },
};

export const WalletAPIProviderContext =
  createContext<WalletAPIProviderContextValue>(initialContextValue);
