import { schemaMessageSign } from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class MessageModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * Let the user sign the provided message.
   * In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md)
   * or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)
   * @param accountId - Ledger Live id of the account
   * @param message - Message the user should sign
   *
   * @returns Message signed
   * @throws {@link RpcError} if an error occured on server side
   */
  async sign(
    accountId: string,
    message: Buffer,
    meta?: Record<string, unknown>,
  ): Promise<Buffer> {
    const messageSignResult = await this.client.request("message.sign", {
      accountId,
      hexMessage: message.toString("hex"),
      meta,
    });

    const safeResults = schemaMessageSign.result.parse(messageSignResult);

    return Buffer.from(safeResults.hexSignedMessage, "hex");
  }
}
