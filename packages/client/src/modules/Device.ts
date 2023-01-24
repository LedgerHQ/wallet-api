import type HWTransport from "@ledgerhq/hw-transport";
import {
  DeviceTransport,
  schemaDeviceTransport,
} from "@ledgerhq/wallet-api-core";
import { TransportWalletAPI } from "../TransportWalletAPI";
import type { WalletAPIClient } from "../WalletAPIClient";

export class DeviceModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * Open low-level transport in the connected wallet
   *
   * @param params - Params for the transport
   *
   * @returns An instance of Transport compatible with @ledgerhq/hw-transport
   * @throws {@link RpcError} if an error occured on server side
   */
  async transport(params: DeviceTransport["params"]): Promise<HWTransport> {
    const deviceTransportResult = await this.client.request(
      "device.transport",
      params
    );

    const safeResults = schemaDeviceTransport.result.parse(
      deviceTransportResult
    );

    return TransportWalletAPI.open({
      walletApi: this.client,
      transportId: safeResults.transportId,
    });
  }
}
