import { Currency, schemaCurrencyList } from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class CurrencyModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * List cryptocurrencies supported by the connected wallet, providing filters by name or ticker
   *
   * @param params - Filters for currencies
   *
   * @returns The list of corresponding cryptocurrencies
   * @throws {@link RpcError} if an error occured on server side
   *
   * @beta Filtering not yet implemented
   */
  async list(params?: {
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencyIds?: string[];
  }): Promise<Currency[]> {
    const listResult = await this.client.request("currency.list", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaCurrencyList.result.parse(listResult);

    return safeResults.currencies;
  }
}
