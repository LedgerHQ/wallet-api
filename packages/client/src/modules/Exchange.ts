import {
  ExchangeComplete,
  ExchangeStart,
  Transaction,
  schemaExchangeComplete,
  schemaExchangeStart,
  serializeTransaction,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class ExchangeModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * @alpha
   * Start the exchange process by generating a nonce on Ledger device
   * @param exchangeType - used by the exchange transport to discern between swap/sell/fund
   *
   * @returns - A transaction ID used to complete the exchange process
   */
  async start(
    exchangeType: ExchangeStart["params"]["exchangeType"],
  ): Promise<string> {
    const exchangeStartResult = await this.client.request("exchange.start", {
      exchangeType,
    });

    const safeResults = schemaExchangeStart.result.parse(exchangeStartResult);

    return safeResults.transactionId;
  }

  /**
   * @alpha
   * Complete an exchange swap process by passing by the exchange content and its signature.
   * User will be prompted on its device to approve the swap exchange operation.
   * If the exchange is validated, the transaction is then signed and broadcasted to the network.
   * @param provider - Used to verify the signature
   * @param fromAccountId - Identifier of the account used as a source for the tx or parent account (for "new token")
   * @param toAccountId - Identifier of the account or parent account (for "new token") used as a destination
   * @param swapId - Identifier of the swap used by backend
   * @param rate - Swap rate in the transaction
   * @param tokenCurrency - "new token" used in the transaction, not listed yet in wallet-api list
   * @param transaction - Transaction containing the recipient and amount
   * @param binaryPayload - Blueprint of the data that we'll allow signing
   * @param signature - Ensures the source of the payload
   * @param feesStrategy - Slow / Medium / Fast
   *
   * @returns - The broadcasted transaction hash.
   */

  async completeSwap({
    provider,
    fromAccountId,
    toAccountId,
    swapId,
    rate,
    transaction,
    binaryPayload,
    signature,
    feeStrategy,
    tokenCurrency,
  }: {
    provider: string;
    fromAccountId: string;
    toAccountId: string;
    swapId: string;
    rate: number;
    transaction: Transaction;
    binaryPayload: Buffer;
    signature: Buffer;
    feeStrategy: ExchangeComplete["params"]["feeStrategy"];
    tokenCurrency?: string;
  }) {
    const exchangeCompleteResult = await this.client.request(
      "exchange.complete",
      {
        exchangeType: "SWAP",
        provider,
        fromAccountId,
        toAccountId,
        swapId,
        rate,
        rawTransaction: serializeTransaction(transaction),
        hexBinaryPayload: binaryPayload.toString("hex"),
        hexSignature: signature.toString("hex"),
        feeStrategy,
        tokenCurrency,
      },
    );

    const safeResults = schemaExchangeComplete.result.parse(
      exchangeCompleteResult,
    );

    return safeResults.transactionHash;
  }

  /**
   * @alpha
   * Complete an exchange sell process by passing by the exchange content and its signature.
   * User will be prompted on its device to approve the sell exchange operation.
   * If the exchange is validated, the transaction is then signed and broadcasted to the network.
   * @param provider - Used to verify the signature
   * @param fromAccountId - Identifier of the account used as a source for the tx
   * @param transaction - Transaction containing the recipient and amount
   * @param binaryPayload - Blueprint of the data that we'll allow signing
   * @param signature - Ensures the source of the payload
   * @param feesStrategy - Slow / Medium / Fast
   *
   * @returns - The broadcasted transaction hash.
   */
  async completeSell({
    provider,
    fromAccountId,
    transaction,
    binaryPayload,
    signature,
    feeStrategy,
  }: {
    provider: string;
    fromAccountId: string;
    transaction: Transaction;
    binaryPayload: Buffer;
    signature: Buffer;
    feeStrategy: ExchangeComplete["params"]["feeStrategy"];
  }): Promise<string> {
    const exchangeCompleteResult = await this.client.request(
      "exchange.complete",
      {
        exchangeType: "SELL",
        provider,
        fromAccountId,
        rawTransaction: serializeTransaction(transaction),
        hexBinaryPayload: binaryPayload.toString("hex"),
        hexSignature: signature.toString("hex"),
        feeStrategy,
      },
    );

    const safeResults = schemaExchangeComplete.result.parse(
      exchangeCompleteResult,
    );

    return safeResults.transactionHash;
  }

  /**
   * @alpha
   * Complete an exchange fund process by passing by the exchange content and its signature.
   * User will be prompted on its device to approve the fund exchange operation.
   * If the exchange is validated, the transaction is then signed and broadcasted to the network.
   * @param provider - Used to verify the signature
   * @param fromAccountId - Identifier of the account used as a source for the tx
   * @param transaction - Transaction containing the recipient and amount
   * @param binaryPayload - Blueprint of the data that we'll allow signing
   * @param signature - Ensures the source of the payload
   * @param feesStrategy - Slow / Medium / Fast
   *
   * @returns - The broadcasted transaction hash.
   */

  async completeFund({
    provider,
    fromAccountId,
    transaction,
    binaryPayload,
    signature,
    feeStrategy,
    tokenCurrency,
  }: {
    provider: string;
    fromAccountId: string;
    transaction: Transaction;
    binaryPayload: Buffer;
    signature: Buffer;
    feeStrategy: ExchangeComplete["params"]["feeStrategy"];
    tokenCurrency?: string;
  }): Promise<string> {
    const exchangeCompleteResult = await this.client.request(
      "exchange.complete",
      {
        exchangeType: "FUND",
        provider,
        fromAccountId,
        rawTransaction: serializeTransaction(transaction),
        hexBinaryPayload: binaryPayload.toString("hex"),
        hexSignature: signature.toString("hex"),
        feeStrategy,
        tokenCurrency,
      },
    );

    const safeResults = schemaExchangeComplete.result.parse(
      exchangeCompleteResult,
    );

    return safeResults.transactionHash;
  }
}
