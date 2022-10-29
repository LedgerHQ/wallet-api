import { getSimulatorTransport } from "./transport";

async function main() {
  const transport = getSimulatorTransport("standard");
  transport.onMessage = (message) => console.log("message: ", message);

  transport.send(
    JSON.stringify({
      jsonrpc: "2.0",
      method: "account.list",
      params: {},
    })
  );

  /*
  const client = new WalletAPIClient(transport);

  const accounts = await client.listAccounts({ currencyIds: ["ethereum"] });
  const currencies = await client.listCurrencies({ currencyIds: ["ethereum"] });
  const tx = await client.signTransactionAndBroadcast(
    "account-eth-1",
    deserializeTransaction({
      family: "ethereum",
      amount: "12",
      recipient: "0xananas",
    })
  );

  console.log({ accounts, currencies, tx });
  */
}

main()
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
