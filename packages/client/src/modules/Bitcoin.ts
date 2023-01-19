import { schemaBitcoinGetXPub } from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class BitcoinModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   *
   * @param accountId id of the bitcoin account
   * @returns the xpub of the account
   *
   * @throws {@link ServerError} if an error occured on server side
   */
  async getXPub(accountId: string): Promise<string> {
    const getXPupResult = await this.client.request("bitcoin.getXPub", {
      accountId,
    });

    const safeResults = schemaBitcoinGetXPub.result.parse(getXPupResult);

    return safeResults.xPub;
  }
}
