import {
  schemaBitcoinGetAddress,
  schemaBitcoinGetPublicKey,
  schemaBitcoinGetXPub,
  schemaBitcoinSignPsbt,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class BitcoinModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   *
   * @param accountId id of the bitcoin account
   * @param derivationPath The derivation path is a relative derivation path from the account
   * e.g to get the first public address of an account, one will request for the “0/0“ derivation path
   * @returns the address of the account for a given derivation path
   *
   * @throws {@link ServerError} if an error occurred on server side
   */
  async getAddress(
    accountId: string,
    derivationPath?: string,
  ): Promise<string> {
    const getAddressResult = await this.client.request("bitcoin.getAddress", {
      accountId,
      derivationPath,
    });

    const safeResults = schemaBitcoinGetAddress.result.parse(getAddressResult);

    return safeResults.address;
  }

  /**
   *
   * @param accountId id of the bitcoin account
   * @param derivationPath The derivation path is a relative derivation path from the account
   * e.g to get the first public key of an account, one will request for the “0/0“ derivation path
   * @returns a raw hexadecimal public key of a bitcoin account at the given derivation path
   *
   * @throws {@link ServerError} if an error occurred on server side
   */
  async getPublicKey(
    accountId: string,
    derivationPath?: string,
  ): Promise<string> {
    const getPublicKeyResult = await this.client.request(
      "bitcoin.getPublicKey",
      {
        accountId,
        derivationPath,
      },
    );

    const safeResults =
      schemaBitcoinGetPublicKey.result.parse(getPublicKeyResult);

    return safeResults.publicKey;
  }

  /**
   *
   * @param accountId id of the bitcoin account
   * @returns the xpub of the account
   *
   * @throws {@link ServerError} if an error occurred on server side
   */
  async getXPub(accountId: string): Promise<string> {
    const getXPupResult = await this.client.request("bitcoin.getXPub", {
      accountId,
    });

    const safeResults = schemaBitcoinGetXPub.result.parse(getXPupResult);

    return safeResults.xPub;
  }

  /**
   * Let the user sign a psbt
   * @param accountId - id of the account
   * @param psbt - The psbt base 64 string
   *
   * @returns The base64 signed PSBT
   * @throws {@link RpcError} if an error occurred on server side
   */
  async signPsbt(accountId: string, psbt: string): Promise<Buffer> {
    const signPsbtResult = await this.client.request("bitcoin.signPsbt", {
      accountId,
      psbt,
    });

    const safeResults = schemaBitcoinSignPsbt.result.parse(signPsbtResult);

    return Buffer.from(safeResults.signedPsbt, "base64");
  }
}
