import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { profiles } from "./profiles";
// import { deserializeTransaction } from "@ledgerhq/wallet-api-core";
import { getSimulatorTransport } from "./transport";

async function main() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transport = getSimulatorTransport(profiles.STANDARD);
  const client = new WalletAPIClient(transport);

  const userId = await client.wallet.userId();
  const info = await client.wallet.info();

  console.log({
    userId,
    info,
  });
  /*  transport.send(
    JSON.stringify({
      id: "49f2b5e9-9e77-495c-8add-8542127b4a50",
      jsonrpc: "2.0",
      method: "transaction.signAndBroadcast",
      params: {
        rawTransaction: {
          family: "ethereum",
          amount: "12",
          recipient: "0xananas",
        },
      },
    })
  );
  */
}

main()
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
