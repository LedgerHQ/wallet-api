import type {
  WalletAPIServer,
  WalletHandlers,
} from "@ledgerhq/wallet-api-server";
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

type MockedResponse<
  K extends keyof WalletHandlers,
  H extends WalletHandlers[K] = WalletHandlers[K],
> = ReturnType<H> | H;

export function declarativeHandler<K extends keyof WalletHandlers>(
  mocks: MockedResponse<K>[],
): WalletHandlers[K] {
  let numCalls = 0;

  // @ts-expect-error: issue with types
  return (...args) => {
    // Finding the mock matching with the number of calls
    // Or fallback to the first mock
    const mock = numCalls > mocks.length ? mocks[0] : mocks[numCalls];

    numCalls += 1;

    if (!mock) {
      return Promise.reject(new Error("No mock object found"));
    }

    if (typeof mock === "function") {
      // @ts-expect-error: issue with types
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return mock(...args);
    }

    return mock;
  };
}

export type MockedHandlers = {
  [K in keyof Partial<WalletHandlers>]: MockedResponse<K>[];
};

export function declarativeHandlers(
  mocks: MockedHandlers,
): Partial<WalletHandlers> {
  const handlers = {};

  for (const key in mocks) {
    // @ts-expect-error: issue with types
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    handlers[key] = declarativeHandler(mocks[key]);
  }

  return handlers;
}
