import data from "./mocks.json";
import type { RequestAccountParams } from "../LedgerLivePlatformSDK/params.types";
import generateRandomTxID from "./generateRandomTxID";
import type { Account, Currency, SignedTransaction } from "../types";
import { deserializeAccount } from "../serializers";
import LedgerLivePlatformSDK from "../LedgerLivePlatformSDK";

const { rawAccounts, rawCurrencies } = data;

const accounts: Account[] = rawAccounts.map(deserializeAccount);
const currencies: Currency[] = rawCurrencies;
/**
 * @see https://www.michaelbromley.co.uk/blog/mocking-classes-with-typescript/
 */

type MockOf<Class, Omit extends keyof Class = never> = {
  [Member in Exclude<keyof Class, Omit>]: Class[Member];
};

export default class LedgerLiveApiMock
  implements
    MockOf<
      LedgerLivePlatformSDK,
      | "bridgeApp"
      | "bridgeDashboard"
      | "completeExchange"
      | "estimateTransactionFees"
      | "getDeviceInfo"
      | "initExchange"
      | "listApps"
      | "synchronizeAccount"
    >
{
  connected = false;

  connect(): void {
    this.connected = true;
  }

  disconnect(): void {
    this.connected = false;
  }

  /** Legder Live Methods */

  async requestAccount(_params: RequestAccountParams): Promise<Account> {
    return Promise.resolve(accounts[0]);
  }

  async listCurrencies(): Promise<Currency[]> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }

    return Promise.resolve(currencies);
  }

  async listAccounts(): Promise<Account[]> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve(accounts);
  }

  async getAccount(accountId: string): Promise<Account> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    const selectedAccount = accounts.find(
      ({ id }: Account) => id === accountId
    );

    if (!selectedAccount) {
      throw new Error("Account not found");
    }
    return Promise.resolve(selectedAccount);
  }

  async receive(accountId: string): Promise<string> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }

    const selectedAccount = accounts.find(
      ({ id }: Account) => id === accountId
    );

    if (!selectedAccount) {
      throw new Error("Account not found");
    }
    return Promise.resolve(selectedAccount.address);
  }

  async signTransaction(
    _accountId: string,
    _transaction: unknown
  ): Promise<SignedTransaction> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve({
      operation: {},
      signature: generateRandomTxID(109),
      expirationDate: null,
    });
  }

  async broadcastSignedTransaction(
    _accountId: string,
    _signedTransaction: SignedTransaction
  ): Promise<string> {
    if (!this.connected) {
      throw new Error("Ledger Live API not connected");
    }
    return Promise.resolve(generateRandomTxID(64));
  }
}
