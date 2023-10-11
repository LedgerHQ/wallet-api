import Transport from "@ledgerhq/hw-transport";
import {
  schemaDeviceClose,
  schemaDeviceExchange,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "./WalletAPIClient";

/**
 * Wallet API Transport implementation
 */
export class TransportWalletAPI extends Transport {
  walletApi: WalletAPIClient;

  transportId: string;

  constructor(walletApi: WalletAPIClient, transportId: string) {
    super();
    this.transportId = transportId;
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
    unsubscribe: () => {
      return;
    },
  });

  /**
   * Create a Ledger transport with the Wallet API transport
   */
  static override open({
    walletApi,
    transportId,
  }: {
    walletApi: WalletAPIClient;
    transportId: string;
  }): Promise<Transport> {
    return Promise.resolve(new TransportWalletAPI(walletApi, transportId));
  }

  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   * @throws {@link RpcError} if an error occured on server side
   */
  override async exchange(apdu: Buffer): Promise<Buffer> {
    const apduHex = apdu.toString("hex");

    const deviceExchangeResult = await this.walletApi.request(
      "device.exchange",
      {
        transportId: this.transportId,
        apduHex,
      },
    );

    const safeResults = schemaDeviceExchange.result.parse(deviceExchangeResult);

    return Buffer.from(safeResults.responseHex, "hex");
  }

  // eslint-disable-next-line class-methods-use-this
  override setScrambleKey() {
    return;
  }

  /**
   * Close the current transport communication.
   *
   * @throws {@link RpcError} if an error occured on server side
   */
  override async close(): Promise<void> {
    const deviceCloseResult = await this.walletApi.request("device.close", {
      transportId: this.transportId,
    });

    schemaDeviceClose.result.parse(deviceCloseResult);

    // Should we check the transportId against the one from the class
    // and throw an error in case of mismatch ?
  }
}
