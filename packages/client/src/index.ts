import { JSONRPCServerAndClient, JSONRPCParams } from 'json-rpc-2.0';
import DeviceBridge from './deviceBridge';
import Logger from './logger';
import {
  Account,
  ApplicationDetails,
  Currency,
  DeviceDetails,
  EcdsaSignature,
  EstimatedFees,
  ExchangePayload,
  ExchangeType,
  FeesLevel,
  ListCurrenciesParams,
  RequestAccountParams,
  SignedTransaction,
  SignTransactionParams,
  Transaction,
  Transport,
} from './types';

const defaultLogger = new Logger('LL-PlatformSDK');

export default class LedgerLivePlatformSDK {
  private transport: Transport;
  private logger: Logger;
  private serverAndClient?: JSONRPCServerAndClient;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    this.transport = transport;
    this.logger = logger;
  }

  /**
   * Wrapper to api request for logging
   */
  private async _request(
    method: string,
    params?: JSONRPCParams,
    clientParams?: void
  ): Promise<any> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Open a bridge to an application to exchange APDUs with a device application
   * @param {string} appName The name of the application to bridge
   * @param {<Result>(DeviceBridge) => Promise<Result>} handler A function using the bridge to send command to a device
   *
   * @returns {Promise<Result>} The result of the handler function
   */
  async bridgeApp<Result>(
    appName: string,
    handler: <Result>(deviceBridge: DeviceBridge) => Promise<Result>
  ): Promise<Result> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Open a bridge to a the device dashboard to exchange APDUs
   * @param {<Result>(DeviceBridge) => Promise<Result>} handler A function using the bridge to send command to a device
   *
   * @returns {Promise<Result>} The result of the handler function
   */
  async bridgeDashboard<Result>(
    handler: <Result>(deviceBridge: DeviceBridge) => Promise<Result>
  ): Promise<Result> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Broadcast a signed transaction through Ledger Live, providing an optimistic Operation given by signTransaction
   * @param {string} accountId - LL id of the account
   * @param {SignedTransaction} signedTransaction - a signed transaction given by LL when signing
   *
   * @returns {string} - hash of the transaction
   */
  async broadcastSignedTransaction(
    accountId: string,
    signedTransaction: SignedTransaction
  ): Promise<string> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Complete an exchange process by passing by the exchange content and its signature.
   * @param {ExchangePayload} exchangePayload
   * @param {EcdsaSignature} payloadSignature
   * @param {FeesLevel} txFeesLevel
   */
  async completeExchange(
    exchangePayload: ExchangePayload,
    payloadSignature: EcdsaSignature,
    txFeesLevel: FeesLevel
  ): Promise<void> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Connect the SDK to the Ledger Live instance
   */
  connect() {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Disconnect the SDK
   */
  async disconnect() {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Estimate fees required to successfully broadcast a transaction.
   * @param {string} accountId - LL id of the account
   * @param {Transaction} transaction - the transaction to estimate
   *
   * @returns {EstimatedFees} - Estimated fees for 3 level of confirmation speed
   */
  async estimateTransactionFees(
    accountId: string,
    transaction: Transaction
  ): Promise<EstimatedFees> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Get information about a currently connected device (firmware version...)
   *
   * @returns {Promise<DeviceDetails>} Informations about a currently connected device
   */
  async getDeviceInfo(): Promise<DeviceDetails> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Start the exchange process by generating a nonce on Ledger device
   * @param {ExchangeType} exchangeType
   * @param {string} partnerName
   *
   * @returns {string} The nonce of the exchange
   */
  async initExchange(exchangeType: ExchangeType, partnerName: String): Promise<string> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * List accounts added by user on Ledger Live
   *
   * @returns {Account[]}
   */
  async listAccounts(): Promise<Account[]> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * List applications opened on a currently connected device
   *
   * @returns {Promise<ApplicationDetails[]>} The list of applications
   */
  async listApps(): Promise<ApplicationDetails[]> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * List crypto-currencies supported by Ledger Live, providing filters by name or ticker
   *
   * @param {ListCurrenciesParams} params - filters for currencies
   * @returns {Currency[]}
   */
  async listCurrencies(params?: ListCurrenciesParams): Promise<Currency[]> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Let user verify it's account address on his device through Ledger Live
   *
   * @param accountId - LL id of the account
   * @returns string - the verified address
   */
  async receive(accountId: string): Promise<string> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Let user choose an account in a Ledger Live, providing filters for choosing currency or allowing add account.
   *
   * @param {RequestAccountParams} params - parameters for the request modal
   * @returns Account
   */
  async requestAccount(params: RequestAccountParams): Promise<Account> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Let user sign a transaction through Ledger Live
   * @param {string} accountId - LL id of the account
   * @param {Transaction} transaction  - the transaction in the currency family-specific format
   * @param {SignTransactionParams} params - parameters for the sign modal
   *
   * @returns {SignedTransaction}
   */
  async signTransaction(
    accountId: string,
    transaction: Transaction,
    params?: SignTransactionParams
  ): Promise<SignedTransaction> {
    throw new Error('Function is not implemented yet');
  }

  /**
   * Synchronize an account with its network and return an updated view of the account
   * @param {string} accountId The id of the account to synchronize
   *
   * @returns {Account} An updated view of the account
   */
  async synchronizeAccount(accountId: string): Promise<Account> {
    throw new Error('Function is not implemented yet');
  }
}
