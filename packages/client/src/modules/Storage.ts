import { schemaStorageGet, schemaStorageSet } from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class StorageModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  async get(key: string, storeId?: string): Promise<string | undefined> {
    const storageGetResult = await this.client.request("storage.get", {
      key,
      storeId,
    });

    const safeResults = schemaStorageGet.result.parse(storageGetResult);

    return safeResults.value;
  }

  async set(key: string, value: string, storeId?: string) {
    const storageSetResult = await this.client.request("storage.set", {
      key,
      value,
      storeId,
    });

    const safeResults = schemaStorageSet.result.parse(storageSetResult);

    return safeResults;
  }
}
