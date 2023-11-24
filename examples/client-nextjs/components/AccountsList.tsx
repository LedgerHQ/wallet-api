import { useAccounts } from "@ledgerhq/wallet-api-client-react";

export function AccountsList() {
  const accountsData = useAccounts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          role="heading"
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="relative flex w-full place-items-center justify-center before:absolute before:-z-[1] before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="grow flex-col">
          <button
            type="button"
            onClick={accountsData.updateData}
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update accounts data
          </button>
          <p role="status">
            {accountsData.loading ? "Loading accounts" : null}
          </p>
          <p>
            {accountsData.updatedAt
              ? `Accounts updated at: ${accountsData.updatedAt.toLocaleTimeString()}`
              : "Never updated yet"}
          </p>
          <ul>
            {accountsData.accounts?.map((account) => {
              return (
                <li key={account.id}>
                  <button
                    className="m-4 flex w-full justify-around rounded-xl border border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl hover:bg-zinc-700/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30"
                    type="button"
                  >
                    <div>
                      <p>Name: {account.name}</p>
                      <p>Address: {account.address}</p>
                    </div>
                    <div>
                      <p>Balance: {account.balance.toString()}</p>
                      <p>Block Height: {account.blockHeight}</p>
                    </div>
                  </button>
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

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        Bottom
      </div>
    </main>
  );
}
