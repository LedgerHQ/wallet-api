import type HWTransport from "@ledgerhq/hw-transport";
import {
  DeviceOpen,
  DeviceSelect,
  DeviceTransport,
  schemaDeviceOpen,
  schemaDeviceSelect,
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
   * @throws {@link RpcError} if an error occurred on server side
   */
  async transport(params: DeviceTransport["params"]): Promise<HWTransport> {
    const deviceTransportResult = await this.client.request(
      "device.transport",
      params,
    );

    const safeResults = schemaDeviceTransport.result.parse(
      deviceTransportResult,
    );

    return TransportWalletAPI.open({
      walletApi: this.client,
      transportId: safeResults.transportId,
    });
  }

  /**
   * Open low-level transport in the connected wallet
   *
   * @param params - Params to open the transport
   *
   * @returns An instance of Transport compatible with @ledgerhq/hw-transport
   * @throws {@link RpcError} if an error occurred on server side
   */
  async open(params: DeviceOpen["params"]): Promise<HWTransport> {
    const deviceOpenResult = await this.client.request("device.open", params);

    const safeResults = schemaDeviceOpen.result.parse(deviceOpenResult);

    return TransportWalletAPI.open({
      walletApi: this.client,
      transportId: safeResults.transportId,
    });
  }

  /**
   * Select a device in the connected wallet
   *
   * @param params - Params to select and check the device
   *
   * @returns A deviceId to use with the `device.open` method
   * @throws {@link RpcError} if an error occurred on server side
   */
  async select(
    params: DeviceSelect["params"],
  ): Promise<DeviceSelect["result"]> {
    const deviceSelectResult = await this.client.request(
      "device.select",
      params,
    );

    return schemaDeviceSelect.result.parse(deviceSelectResult);
  }
}
