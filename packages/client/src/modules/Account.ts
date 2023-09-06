import {
  Account,
  deserializeAccount,
  schemaAccountList,
  schemaAccountReceive,
  schemaAccountRequest,
} from "@ledgerhq/wallet-api-core";
import type { WalletAPIClient } from "../WalletAPIClient";

export class AccountModule {
  private client: WalletAPIClient;

  constructor(client: WalletAPIClient) {
    this.client = client;
  }

  /**
   * List accounts added by user on the connected wallet
   *
   * @param params - Filters for currencies
   *
   * @returns The list of accounts on the connected wallet
   * @throws {@link RpcError} if an error occured on server side
   */
  async list(params?: {
    /**
     * Select a set of currencies by id to filter accounts against.
     */
    currencyIds?: string[];
  }): Promise<Account[]> {
    const listAccountsResult = await this.client.request("account.list", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaAccountList.result.parse(listAccountsResult);

    return safeResults.rawAccounts.map(deserializeAccount);
  }

  /**
   * Ask the connected wallet for an account matching a specific set of critterias.
   *
   * @param params - Parameters of the request.
   *
   * @returns The account selected by the user
   * @throws {@link RpcError} if an error occured on server side
   */
  async request(params?: {
    /**
     * Select a set of currencies by id. Globing is enabled.
     * This list of currencies ids can be found [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/currencies.ts)
     * and the list of tokens ids [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/tokens.ts).
     * You can find more info on how the tokens ids are built for each chain / family you want to use by looking at the converter functions used [here](https://github.com/LedgerHQ/ledger-live/blob/main/libs/ledgerjs/packages/cryptoassets/src/tokens.ts#L25-L33).
     * You can easily search for a token in the corresponding data file using it's contract address.
     * For example, the USDC token id for Ethereum is `ethereum/erc20/usd__coin`.
     */
    currencyIds?: string[];
  }): Promise<Account> {
    const requestAccountsResult = await this.client.request("account.request", {
      currencyIds: params?.currencyIds,
    });

    const safeResults = schemaAccountRequest.result.parse(
      requestAccountsResult,
    );

    return deserializeAccount(safeResults.rawAccount);
  }

  /**
   * Let user verify it's account address on his device through Ledger Live
   *
   * @param accountId - id of the account
   *
   * @returns The verified address or an error message if the verification doesn't succeed
   */
  async receive(accountId: string): Promise<string> {
    const receiveAccountsResult = await this.client.request("account.receive", {
      accountId,
    });

    const safeResults = schemaAccountReceive.result.parse(
      receiveAccountsResult,
    );

    return safeResults.address;
  }
}
