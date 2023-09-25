import { schemaCustomRequest } from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class CustomModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * Let the app request a custom method.
   * @param method - Custom method name
   * @param data - Data to send
   *
   * @returns Message signed
   * @throws {@link RpcError} if an error occured on server side
   */
  protected async request(
    method: string,
    data: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    const customResult = await this.client.request(`custom.${method}`, data);

    console.log("CustomModule", customResult);

    return schemaCustomRequest.result.parse(customResult);
  }
}
