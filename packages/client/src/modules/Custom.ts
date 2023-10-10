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
  protected request<D, R>(method: `custom.${string}`, data: D): Promise<R> {
    return this.client.request(method, data) as Promise<R>;
  }
}
