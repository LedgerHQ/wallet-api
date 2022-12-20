import {
  RpcError,
  schemaStorageGet,
  schemaStorageSet,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class Storage {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  async get(key: string, storeId?: string): Promise<string | undefined> {
    const storageGetResult = await this.client.request("storage.get", {
      key,
      storeId,
    });

    if ("error" in storageGetResult) {
      throw new RpcError(storageGetResult.error);
    }

    const safeResults = schemaStorageGet.result.parse(storageGetResult.result);

    return safeResults.value;
  }

  async set(key: string, value: string, storeId?: string) {
    const storageSetResult = await this.client.request("storage.set", {
      key,
      value,
      storeId,
    });

    if ("error" in storageSetResult) {
      throw new RpcError(storageSetResult.error);
    }

    const safeResults = schemaStorageSet.result.parse(storageSetResult.result);

    return safeResults;
  }
}
