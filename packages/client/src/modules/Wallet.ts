import {
  schemaWalletUserId,
  schemaWalletInfo,
  WalletInfo,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class Wallet {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   *
   * @returns the userId
   *
   * @throws {@link ServerError} if an error occured on server side
   */
  async userId(): Promise<string> {
    const userIdResult = await this.client.request("wallet.userId", {});

    const safeResults = schemaWalletUserId.result.parse(userIdResult);

    return safeResults.userId;
  }

  /**
   *
   * @returns the wallet infos
   *
   * @throws {@link ServerError} if an error occured on server side
   */
  async info(): Promise<WalletInfo["result"]> {
    const infoResult = await this.client.request("wallet.info", {});

    const safeResults = schemaWalletInfo.result.parse(infoResult);

    return safeResults;
  }
}
