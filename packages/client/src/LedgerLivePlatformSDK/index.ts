/**
 * @module LedgerLivePlatformSDK
 */

import {
  JSONRPCServerAndClient,
  JSONRPCParams,
  JSONRPCServer,
  JSONRPCClient,
} from "json-rpc-2.0";

import Logger from "../logger";
import { RawAccount, RawSignedTransaction } from "../rawTypes";
import { deserializeAccount, serializeTransaction } from "../serializers";

import { ExchangeType } from "../types";

import type {
  Account,
  ApplicationDetails,
  Currency,
  DeviceInfo,
  EcdsaSignature,
  ExchangeDeviceTxId,
  ExchangePayload,
  FeesLevel,
  Transaction,
  Transport,
} from "../types";

import LedgerPlatformApduTransport from "./LedgerPlatformApduTransport";

const defaultLogger = new Logger("LL-PlatformSDK");

export default class LedgerLivePlatformSDK {
  /**
   * @ignore
   * @internal
   */
  private transport: Transport;

  /**
   * @ignore
   * @internal
   */
  private logger: Logger;

  /**
   * @ignore
   * @internal
   */
  private serverAndClient?: JSONRPCServerAndClient;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    this.transport = transport;
    this.logger = logger;
  }

  /**
   * @ignore
   * @internal
   * Wrapper to api request for logging
   */
  private async _request<T>(
    method: string,
    params?: JSONRPCParams
  ): Promise<T> {
    if (!this.serverAndClient) {
      this.logger.error(`not connected - ${method}`);
      throw new Error("Ledger Live API not connected");
    }

    this.logger.log(`request - ${method}`, params);
    try {
      const result = (await this.serverAndClient.request(method, params)) as T;
      this.logger.log(`response - ${method}`, params);
      return result;
    } catch (error) {
      this.logger.warn(`error - ${method}`, params);
      throw error;
    }
  }

  /**
   * Connect the SDK to the Ledger Live instance
   *
   * @remarks
   * Establish the connection with Ledger Live through the [[transport]] instance provided at initialization
   */
  connect(): void {
    const serverAndClient = new JSONRPCServerAndClient(
      new JSONRPCServer(),
      new JSONRPCClient((payload) => this.transport.send(payload))
    );

    this.transport.onMessage = (payload) =>
      serverAndClient.receiveAndSend(payload);
    this.transport.connect();
    this.serverAndClient = serverAndClient;
    this.logger.log("connected", this.transport);
  }

  /**
   * Disconnect the SDK.
   */
  disconnect(): void {
    delete this.serverAndClient;
    this.transport.disconnect();
    this.logger.log("disconnected", this.transport);
  }

  /**
   * @ignore Not yet implemented
   * Open a bridge to an application to exchange APDUs with a device application
   * @param _appName - The name of the application to bridge
   *
   * @returns The result of the handler function
   */
  async bridgeApp(_appName: string): Promise<LedgerPlatformApduTransport> {
    throw new Error("Function is not implemented yet");
  }

  /**
   * @ignore Not yet implemented
   * Open a bridge to a the device dashboard to exchange APDUs
   *
   * @returns A APDU transport which can be used either to send raw APDU
   * or used with ledgerjs libraries.
   */
  async bridgeDashboard(): Promise<LedgerPlatformApduTransport> {
    throw new Error("Function is not implemented yet");
  }

  /**
   * @alpha
   * Start the exchange process by generating a nonce on Ledger device
   * @param exchangeType - used by the exchange transport to discern between swap/sell/fund
   *
   * @returns - A transaction ID used to complete the exchange process
   */
  async startExchange({
    exchangeType,
  }: {
    exchangeType: ExchangeType;
  }): Promise<ExchangeDeviceTxId> {
    return this._request("exchange.start", { exchangeType });
  }

  /**
   * @alpha
   * Complete an exchange process by passing by the exchange content and its signature.
   * User will be prompted on its device to approve the exchange.
   * If the exchange is validated, the transaction is then signed and broadcasted to the network.
   * @param provider - Used to verify the signature
   * @param fromAccountId - Live identifier of the account used as a source for the tx
   * @param toAccountId - (Swap) Live identifier of the account used as a destination
   * @param transaction - Transaction containing the recipient and amount
   * @param binaryPayload - Blueprint of the data that we'll allow signing
   * @param signature - Ensures the source of the payload
   * @param feesStrategy - Slow / Medium / Fast
   * @param exchangeType - used by the exchange transport to discern between swap/sell/fund
   *
   * @returns - The broadcasted transaction details.
   */
  async completeExchange({
    provider,
    fromAccountId,
    toAccountId,
    transaction,
    binaryPayload,
    signature,
    feesStrategy,
    exchangeType,
  }: {
    provider: string;
    fromAccountId: string;
    toAccountId?: string;
    transaction: Transaction;
    binaryPayload: ExchangePayload;
    signature: EcdsaSignature;
    feesStrategy: FeesLevel;
    exchangeType: ExchangeType;
  }): Promise<RawSignedTransaction> {
    if (exchangeType === ExchangeType.SWAP && !toAccountId) {
      throw new Error("Missing parameter 'toAccountId' for a swap operation");
    }

    return this._request("exchange.complete", {
      provider,
      fromAccountId,
      toAccountId,
      transaction: serializeTransaction(transaction),
      binaryPayload: binaryPayload.toString("hex"),
      signature: signature.toString("hex"),
      feesStrategy,
      exchangeType,
    });
  }

  /**
   * Let the user sign a transaction through Ledger Live
   * @param accountId - Ledger Live id of the account
   * @param transaction - The transaction object in the currency family-specific format
   * @param params - Parameters for the sign modal
   *
   * @returns The raw signed transaction to broadcast
   */
  async signTransaction(
    accountId: string,
    transaction: Transaction,
    params?: {
      /**
       * The name of the Ledger Nano app to use for the signing process
       */
      useApp: string;
    }
  ): Promise<RawSignedTransaction> {
    return this._request<RawSignedTransaction>("transaction.sign", {
      accountId,
      transaction: serializeTransaction(transaction),
      params: params || {},
    });
  }

  /**
   * Let the user sign the provided message through Ledger Live
   * @param accountId - Ledger Live id of the account (Ethereum only)
   * @param message - Message the user should sign
   *
   * @returns Message signed
   */
  async signMessage(accountId: string, message: Buffer): Promise<string> {
    return this._request("message.sign", {
      accountId,
      message: message.toString("hex"),
    });
  }

  /**
   * Broadcast a previously signed transaction through Ledger Live
   * @param accountId - Ledger Live id of the account
   * @param signedTransaction - A [[RawSignedTransaction]] returned by Ledger Live when signing with [[signTransaction]]
   *
   * @returns The hash of the transaction
   */
  async broadcastSignedTransaction(
    accountId: string,
    signedTransaction: RawSignedTransaction
  ): Promise<string> {
    return this._request("transaction.broadcast", {
      accountId,
      signedTransaction,
    });
  }

  /**
   * List accounts added by user on Ledger Live
   *
   * @returns The list of accounts added by the current user on Ledger Live
   */
  async listAccounts(
    params: {
      includeTokens?: boolean;
    } = {}
  ): Promise<Account[]> {
    const rawAccounts = await this._request<RawAccount[]>(
      "account.list",
      params
    );

    return rawAccounts.map(deserializeAccount);
  }

  /**
   * Let user choose an account in a Ledger Live, providing filters for choosing currency or allowing add account.
   *
   * @param params - Parameters for the request modal, currencies is an array of currencies (not families).
   *
   * @returns The account selected by the user
   */
  async requestAccount(
    params: {
      /**
       * Select a set of currencies by id. Globing is enabled
       */
      currencies?: string[];
      /**
       * Allow the user to create a new account during the flow
       */
      allowAddAccount?: boolean;
      /**
       * Allow the user to pick token accounts
       */
      includeTokens?: boolean;
    } = {}
  ): Promise<Account> {
    const rawAccount = await this._request<RawAccount>(
      "account.request",
      params
    );

    return deserializeAccount(rawAccount);
  }

  /**
   * Let user verify it's account address on his device through Ledger Live
   *
   * @param accountId - LL id of the account
   *
   * @returns The verified address or an error message if the verification doesn't succeed
   */
  async receive(accountId: string): Promise<string> {
    return this._request("account.receive", { accountId });
  }

  /**
   * @ignore Not yet implemented
   * Synchronize an account with its network and return an updated view of the account
   * @param accountId - The id of the account to synchronize
   *
   * @returns - An updated view of the account
   */
  async synchronizeAccount(_accountId: string): Promise<Account> {
    throw new Error("Function is not implemented yet");
  }

  /**
   * List cryptocurrencies supported by Ledger Live, providing filters by name or ticker
   *
   * @param params - Filters for currencies
   *
   * @returns The list of corresponding cryptocurrencies
   *
   * @beta Filtering not yet implemented
   */
  async listCurrencies(params?: {
    /**
     * Include tokens in the results
     */
    includeTokens?: boolean;
    /**
     * Select a set of currencies by id. Globing is enabled
     */
    currencies?: string[];
  }): Promise<Currency[]> {
    return this._request("currency.list", params || {});
  }

  /**
   * @ignore Not yet implemented
   * Get information about a currently connected device (firmware version...)
   *
   * @returns {Promise<DeviceInfo>} - Informations about the last connected device
   */
  async getLastConnectedDeviceInfo(): Promise<DeviceInfo> {
    throw new Error("Function is not implemented yet");
  }

  /**
   * @ignore Not yet implemented
   * List applications opened on a currently connected device
   *
   * @returns {Promise<ApplicationDetails[]>} - The list of applications
   */
  async listApps(): Promise<ApplicationDetails[]> {
    throw new Error("Function is not implemented yet");
  }
}
