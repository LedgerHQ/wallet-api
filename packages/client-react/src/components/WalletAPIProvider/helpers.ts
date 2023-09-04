import type { WalletAPIProviderContextValue } from "./types";

export function updateLoadableInState<
  T extends keyof WalletAPIProviderContextValue["state"],
>(
  setState: WalletAPIProviderContextValue["setState"],
  key: T,
  patch: Partial<WalletAPIProviderContextValue["state"][T]>,
) {
  setState((oldState) => ({
    ...oldState,
    [key]: {
      ...oldState[key],
      ...patch,
    },
  }));
}
