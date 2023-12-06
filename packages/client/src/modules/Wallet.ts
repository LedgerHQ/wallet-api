import {
  WalletInfo,
  schemaWalletCapabilities,
  schemaWalletInfo,
  schemaWalletUserId,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class WalletModule {
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
   * @returns The wallet infos
   *
   * @throws {@link ServerError} if an error occured on server side
   */
  async info(): Promise<WalletInfo["result"]> {
    const infoResult = await this.client.request("wallet.info", {});

    const safeResults = schemaWalletInfo.result.parse(infoResult);

    return safeResults;
  }

  /**
   * List the wallet's implemented methodIds
   *
   * @returns The list of implemented method ids
   * @throws {@link RpcError} if an error occured on server side
   *
   * @beta Filtering not yet implemented
   */
  async capabilities(): Promise<string[]> {
    const walletCapabilitiesResult = await this.client.request(
      "wallet.capabilities",
      {},
    );

    const safeResults = schemaWalletCapabilities.result.parse(
      walletCapabilitiesResult,
    );

    return safeResults.methodIds;
  }
}
