"use client";

import { WindowMessageTransport } from "@ledgerhq/wallet-api-client";
import {
  WalletAPIProvider,
  useAccounts,
} from "@ledgerhq/wallet-api-client-react";
import {
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";

function Home() {
  const accountsData = useAccounts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div>
          <button
            type="button"
            onClick={accountsData.updateData}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update accounts data
          </button>
          <p>{accountsData.loading ? "Loading accounts" : null}</p>
          <p>
            {accountsData.updatedAt
              ? `Accounts updated at: ${accountsData.updatedAt}`
              : "Never updated yet"}
          </p>
          <ul>
            {accountsData.accounts?.map((account) => {
              return (
                <li
                  key={account.id}
                  className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 m-4"
                >
                  <pre>{JSON.stringify(account, null, 2)}</pre>
                </li>
              );
            })}
          </ul>
          {accountsData.error ? (
            <div>
              <pre>{JSON.stringify(accountsData.error, null, 2)}</pre>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        Bottom
      </div>
    </main>
  );
}

const isSimulator =
  typeof window === "undefined"
    ? false
    : new URLSearchParams(window.location.search).get("simulator");

function getWalletAPITransport() {
  if (typeof window === "undefined") {
    return {
      onMessage: undefined,
      send: () => {},
    };
  }

  if (isSimulator) {
    return getSimulatorTransport(profiles.STANDARD);
  }

  const transport = new WindowMessageTransport();
  transport.connect();
  return transport;
}

const transport = getWalletAPITransport();

export default function Page() {
  return (
    <WalletAPIProvider transport={transport}>
      <Home />
    </WalletAPIProvider>
  );
}
