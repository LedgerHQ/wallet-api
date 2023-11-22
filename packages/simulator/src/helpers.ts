import type {
  WalletAPIServer,
  WalletHandlers,
} from "@ledgerhq/wallet-api-server";
import type { SimulatorProfile } from "./types";

export function applyProfile(
  serverInstance: WalletAPIServer,
  profile: SimulatorProfile
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
  mocks: MockedResponse<K>[]
): WalletHandlers[K] {
  let numCalls = 0;

  return (...args) => {
    // Finding the mock matching with the number of calls
    // Or fallback to the first mock
    const mock = numCalls > mocks.length ? mocks[0] : mocks[numCalls];

    numCalls += 1;

    if (!mock) {
      return Promise.reject(new Error("No mock object found"));
    }

    if (typeof mock === "function") {
      return mock(...args);
    }

    return mock;
  };
}

export type MockedHandlers = {
  [K in keyof Partial<WalletHandlers>]: MockedResponse<K>[];
};

export function declarativeHandlers(
  mocks: MockedHandlers
): Partial<WalletHandlers> {
  const handlers = {};

  for (const key in mocks) {
    handlers[key] = declarativeHandler(mocks[key]);
  }

  return handlers;
}

declarativeHandlers({
  "account.receive": [
    ({ account }) => {
      console.log(account);
      return Promise.resolve(account.address);
    },
  ],
});
