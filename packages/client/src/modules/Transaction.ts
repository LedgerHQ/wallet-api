import {
  schemaTransactionSign,
  schemaTransactionSignAndBroadcast,
  schemaTransactionSignRaw,
  serializeTransaction,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
  TransactionSignRaw,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class TransactionModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * Let the user sign a transaction that won't be broadcasted by the connected wallet
   * @param accountId - id of the account
   * @param transaction - The transaction object in the currency family-specific format
   * @param options - Extra parameters
   *
   * @returns The raw signed transaction
   * @throws {@link RpcError} if an error occurred on server side
   */
  async sign(
    accountId: string,
    transaction: Transaction,
    options?: TransactionSign["params"]["options"],
    meta?: Record<string, unknown>,
  ): Promise<Buffer> {
    const transactionSignResult = await this.client.request(
      "transaction.sign",
      {
        accountId,
        rawTransaction: serializeTransaction(transaction),
        options,
        meta,
      },
    );

    const safeResults = schemaTransactionSign.result.parse(
      transactionSignResult,
    );

    return Buffer.from(safeResults.signedTransactionHex, "hex");
  }

  /**
   * Let the user sign a raw transaction that can be broadcasted by the connected wallet
   * @param accountId - id of the account
   * @param transaction - The raw transaction string in the currency family-specific format
   * @param broadcast - Optional boolean to indicate if the transaction should be broadcasted by the wallet
   * @param options - Extra parameters
   *
   * @returns The raw signed transaction
   * @throws {@link RpcError} if an error occurred on server side
   */
  async signRaw(
    accountId: string,
    transaction: string,
    broadcast?: boolean,
    options?: TransactionSignRaw["params"]["options"],
    meta?: Record<string, unknown>,
  ): Promise<{ signedTransactionHex: string; transactionHash?: string }> {
    const transactionSignRawResult = await this.client.request(
      "transaction.signRaw",
      {
        accountId,
        rawTransaction: transaction,
        broadcast,
        options,
        meta,
      },
    );

    const safeResults = schemaTransactionSignRaw.result.parse(
      transactionSignRawResult,
    );

    return safeResults;
  }

  /**
   * Let the user sign and broadcast a transaction
   * @param accountId - id of the account
   * @param transaction - The transaction object in the currency family-specific format
   * @param options - Extra parameters
   *
   * @returns The transaction hash
   * @throws {@link RpcError} if an error occurred on server side
   */
  async signAndBroadcast(
    accountId: string,
    transaction: Transaction,
    options?: TransactionSignAndBroadcast["params"]["options"],
    meta?: Record<string, unknown>,
  ): Promise<string> {
    const transactionSignResult = await this.client.request(
      "transaction.signAndBroadcast",
      {
        accountId,
        rawTransaction: serializeTransaction(transaction),
        options,
        meta,
      },
    );

    const safeResults = schemaTransactionSignAndBroadcast.result.parse(
      transactionSignResult,
    );

    return safeResults.transactionHash;
  }
}
