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
  protected async request<
    D extends Record<string, unknown>,
    R extends Record<string, unknown>,
  >(method: string, data: D): Promise<R> {
    const customResult = await this.client.request(`custom.${method}`, data);

    return schemaCustomRequest.result.parse(customResult);
  }
}
