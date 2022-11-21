import Transport from "@ledgerhq/hw-transport";
import {
  RpcError,
  schemaDeviceClose,
  schemaDeviceExchange,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "./WalletAPIClient";

/**
 * Wallet API Transport implementation
 */
export class TransportWalletAPI extends Transport {
  walletApi: WalletAPIClient;

  deviceId: string;

  constructor(walletApi: WalletAPIClient, deviceId: string) {
    super();
    this.deviceId = deviceId;
    this.walletApi = walletApi;
  }

  /**
   * Check if Wallet API transport is supported.
   */
  static override isSupported = (): Promise<boolean> => Promise.resolve(true);

  /**
   * This transport is not discoverable
   */
  static override list = () => Promise.resolve([]);

  static override listen = (_observer: unknown) => ({
    unsubscribe: () => {},
  });

  /**
   * Create a Ledger transport with the Wallet API transport
   */
  static override open({
    walletApi,
    deviceId,
  }: {
    walletApi: WalletAPIClient;
    deviceId: string;
  }): Promise<Transport> {
    return Promise.resolve(new TransportWalletAPI(walletApi, deviceId));
  }

  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   */
  override async exchange(apdu: Buffer): Promise<Buffer> {
    const apduHex = apdu.toString("hex");

    const deviceExchangeResult = await this.walletApi.request(
      "device.exchange",
      {
        deviceId: this.deviceId,
        apduHex,
      }
    );

    if ("error" in deviceExchangeResult) {
      throw new RpcError(deviceExchangeResult.error);
    }

    const safeResults = schemaDeviceExchange.result.parse(
      deviceExchangeResult.result
    );

    return Buffer.from(safeResults.responseHex, "hex");
  }

  // eslint-disable-next-line class-methods-use-this
  override setScrambleKey() {}

  override async close(): Promise<void> {
    const deviceCloseResult = await this.walletApi.request("device.close", {
      deviceId: this.deviceId,
    });

    if ("error" in deviceCloseResult) {
      throw new RpcError(deviceCloseResult.error);
    }

    schemaDeviceClose.result.parse(deviceCloseResult.result);

    // Should we check the deviceId against the one from the class
    // and throw an error in case of mismatch ?
  }
}
