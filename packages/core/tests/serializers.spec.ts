import BigNumber from "bignumber.js";
import {
  Account,
  AlgorandTransaction,
  BitcoinTransaction,
  CosmosTransaction,
  CryptoOrgTransaction,
  deserializeAccount,
  deserializeTransaction,
  EthereumTransaction,
  schemaFamilies,
  PolkadotTransaction,
  RawAccount,
  RawAlgorandTransaction,
  RawBitcoinTransaction,
  RawCosmosTransaction,
  RawCryptoOrgTransaction,
  RawEthereumTransaction,
  RawPolkadotTransaction,
  RawRippleTransaction,
  RawStellarTransaction,
  RawTezosTransaction,
  RawTransaction,
  RawTronTransaction,
  RippleTransaction,
  serializeAccount,
  serializeTransaction,
  StellarTransaction,
  TezosTransaction,
  Transaction,
  TronTransaction,
} from "../src";

const date = new Date();
describe("serializers.ts", () => {
  describe("serializeAccount", () => {
    it("should succeed to serialize an account", () => {
      const serializedAccount = serializeAccount({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: new BigNumber(0),
        spendableBalance: new BigNumber(0),
        blockHeight: 0,
        lastSyncDate: date,
      });

      expect(serializedAccount).toEqual({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: "0",
        spendableBalance: "0",
        blockHeight: 0,
        lastSyncDate: date.toISOString(),
      });
    });
  });

  describe("deserializeAccount", () => {
    it("should succeed to deserialize an account", () => {
      const deserializedAccount = deserializeAccount({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: "0",
        spendableBalance: "0",
        blockHeight: 0,
        lastSyncDate: date.toISOString(),
      });

      expect(deserializedAccount).toEqual({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: new BigNumber(0),
        spendableBalance: new BigNumber(0),
        blockHeight: 0,
        lastSyncDate: date,
      });
    });
  });

  describe("serializeTransaction", () => {
    describe("ethereum", () => {
      const family = schemaFamilies.enum.ethereum;

      it("should succeed to serialize an ethereum transaction with data, gasPrice & gasLimit", () => {
        const transaction: EthereumTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family,
          nonce: 123,
          data: Buffer.from([]),
          gasPrice: new BigNumber(0),
          gasLimit: new BigNumber(0),
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          nonce: 123,
          data: "",
          gasPrice: "0",
          gasLimit: "0",
        });
      });

      it("should succeed to serialize an ethereum transaction without data, gasPrice & gasLimit", () => {
        const transaction: EthereumTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family,
          nonce: 123,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          nonce: 123,
          data: undefined,
          gasPrice: undefined,
          gasLimit: undefined,
        });
      });
    });

    describe("bitcoin", () => {
      const family = schemaFamilies.enum.bitcoin;

      it("should succeed to serialize a bitcoin transaction with feePerByte", () => {
        const transaction: BitcoinTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family,
          feePerByte: new BigNumber(0),
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          feePerByte: "0",
        });
      });

      it("should succeed to serialize a bitcoin transaction without feePerByte", () => {
        const transaction: BitcoinTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          feePerByte: undefined,
        });
      });
    });

    describe("algorand", () => {
      const family = schemaFamilies.enum.algorand;

      it("should succeed to serialize an algorand transaction with fees, assetId and memo", () => {
        const transaction: AlgorandTransaction = {
          family,
          mode: "claimReward",
          fees: new BigNumber(1),
          assetId: "assetId",
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "claimReward",
          fees: "1",
          assetId: "assetId",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize an algorand transaction without fees, assetId and memo", () => {
        const transaction: AlgorandTransaction = {
          family,
          mode: "claimReward",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "claimReward",
          fees: undefined,
          assetId: undefined,
          memo: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("cosmos", () => {
      const family = schemaFamilies.enum.cosmos;

      it("should succeed to serialize a cosmos transaction with fees, gas and memo", () => {
        const transaction: CosmosTransaction = {
          family,
          mode: "send",
          fees: new BigNumber(1),
          gas: new BigNumber(4),
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fees: "1",
          gas: "4",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a cosmos transaction without fees, gas and memo", () => {
        const transaction: CosmosTransaction = {
          family,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fees: undefined,
          gas: undefined,
          memo: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("crypto.org", () => {
      const family = schemaFamilies.enum.crypto_org;

      it("should succeed to serialize a crypto.org transaction with fees", () => {
        const transaction: CryptoOrgTransaction = {
          family,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a crypto.org transaction without fees", () => {
        const transaction: CryptoOrgTransaction = {
          family,
          mode: "mode",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "mode",
          fees: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("polkadot", () => {
      const family = schemaFamilies.enum.polkadot;

      it("should succeed to serialize a polkadot transaction with fee and era", () => {
        const transaction: PolkadotTransaction = {
          family,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a polkadot transaction without fee and era", () => {
        const transaction: PolkadotTransaction = {
          family,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fee: undefined,
          era: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("ripple", () => {
      const family = schemaFamilies.enum.ripple;

      it("should succeed to serialize a ripple transaction with fee", () => {
        const transaction: RippleTransaction = {
          family,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a ripple transaction without fee", () => {
        const transaction: RippleTransaction = {
          family,
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          fee: undefined,
          tag: 4,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("stellar", () => {
      const family = schemaFamilies.enum.stellar;

      it("should succeed to serialize a stellar transaction with fees, memoType and memoValue", () => {
        const transaction: StellarTransaction = {
          family,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a stellar transaction without fees, memoType and memoValue", () => {
        const transaction: StellarTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          fees: undefined,
          memoType: undefined,
          memoValue: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("tezos", () => {
      const family = schemaFamilies.enum.tezos;

      it("should succeed to serialize a tezos transaction with fees and gasLimit", () => {
        const transaction: TezosTransaction = {
          family,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tezos transaction without fees and gasLimit", () => {
        const transaction: TezosTransaction = {
          family,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          fees: undefined,
          gasLimit: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("tron", () => {
      const family = schemaFamilies.enum.tron;

      it("should succeed to serialize a tron transaction with resource and duration", () => {
        const transaction: TronTransaction = {
          family,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tron transaction without resource and duration", () => {
        const transaction: TronTransaction = {
          family,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "send",
          resource: undefined,
          duration: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });
  });

  describe("deserializeTransaction", () => {
    describe("ethereum", () => {
      const family = schemaFamilies.enum.ethereum;

      it("should succeed to deserialize an ethereum transaction with data, gasPrice & gasLimit", () => {
        const serializedTransaction: RawEthereumTransaction = {
          family,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
          data: "data",
          gasPrice: "456",
          gasLimit: "789",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(0),
          recipient: "recipient",
          nonce: 123,
          data: Buffer.from("data", "hex"),
          gasPrice: new BigNumber(456),
          gasLimit: new BigNumber(789),
        });
      });

      it("should succeed to deserialize an ethereum transaction without data, gasPrice & gasLimit", () => {
        const serializedTransaction: RawEthereumTransaction = {
          family,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(0),
          recipient: "recipient",
          nonce: 123,
          data: undefined,
          gasPrice: undefined,
          gasLimit: undefined,
        });
      });
    });

    describe("bitcoin", () => {
      const family = schemaFamilies.enum.bitcoin;

      it("should succeed to deserialize a bitcoin transaction with feePerByte", () => {
        const serializedTransaction: RawBitcoinTransaction = {
          family,
          amount: "0",
          recipient: "recipient",
          feePerByte: "10",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: new BigNumber(10),
        });
      });

      it("should succeed to deserialize a bitcoin transaction without feePerByte", () => {
        const serializedTransaction: RawBitcoinTransaction = {
          family,
          amount: "0",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: undefined,
        });
      });
    });

    describe("algorand", () => {
      const family = schemaFamilies.enum.algorand;

      it("should succeed to deserialize an algorand transaction with fees, assetId and memo", () => {
        const serializedTransaction: RawAlgorandTransaction = {
          family,
          mode: "claimReward",
          fees: "1",
          assetId: "assetId",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "claimReward",
          fees: new BigNumber(1),
          assetId: "assetId",
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize an algorand transaction without fees, assetId and memo", () => {
        const serializedTransaction: RawAlgorandTransaction = {
          family,
          mode: "claimReward",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "claimReward",
          amount: new BigNumber(100),
          recipient: "recipient",
          fees: undefined,
          assetId: undefined,
          memo: undefined,
        });
      });
    });

    describe("cosmos", () => {
      const family = schemaFamilies.enum.cosmos;

      it("should succeed to deserialize a cosmos transaction with fees, gas and memo", () => {
        const serializedTransaction: RawCosmosTransaction = {
          family,
          mode: "send",
          fees: "1",
          gas: "4",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          fees: new BigNumber(1),
          gas: new BigNumber(4),
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a cosmos transaction without fees, gas and memo", () => {
        const serializedTransaction: RawCosmosTransaction = {
          family,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
          fees: undefined,
          gas: undefined,
          memo: undefined,
        });
      });
    });

    describe("crypto.org", () => {
      const family = schemaFamilies.enum.crypto_org;

      it("should succeed to deserialize a crypto.org transaction with fees", () => {
        const serializedTransaction: RawCryptoOrgTransaction = {
          family,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a crypto.org transaction without fees", () => {
        const serializedTransaction: RawCryptoOrgTransaction = {
          family,
          mode: "mode",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "mode",
          fees: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("polkadot", () => {
      const family = schemaFamilies.enum.polkadot;

      it("should succeed to deserialize a polkadot transaction with fee and era", () => {
        const serializedTransaction: RawPolkadotTransaction = {
          family,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a polkadot transaction without fee and era", () => {
        const serializedTransaction: RawPolkadotTransaction = {
          family,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          fee: undefined,
          era: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("ripple", () => {
      const family = schemaFamilies.enum.ripple;

      it("should succeed to deserialize a ripple transaction with fee", () => {
        const serializedTransaction: RawRippleTransaction = {
          family,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a ripple transaction without fee", () => {
        const serializedTransaction: RawRippleTransaction = {
          family,
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          fee: undefined,
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("stellar", () => {
      const family = schemaFamilies.enum.stellar;

      it("should succeed to deserialize a stellar transaction with fees, memoType and memoValue", () => {
        const serializedTransaction: RawStellarTransaction = {
          family,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a stellar transaction without fees, memoType and memoValue", () => {
        const serializedTransaction: RawStellarTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          fees: undefined,
          memoType: undefined,
          memoValue: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("tezos", () => {
      const family = schemaFamilies.enum.tezos;

      it("should succeed to deserialize a tezos transaction with fees and gasLimit", () => {
        const serializedTransaction: RawTezosTransaction = {
          family,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tezos transaction without fees and gasLimit", () => {
        const serializedTransaction: RawTezosTransaction = {
          family,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          fees: undefined,
          gasLimit: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("tron", () => {
      const family = schemaFamilies.enum.tron;

      it("should succeed to deserialize a tron transaction with resource and duration", () => {
        const serializedTransaction: RawTronTransaction = {
          family,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tron transaction without resource and duration", () => {
        const serializedTransaction: RawTronTransaction = {
          family,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          mode: "send",
          resource: undefined,
          duration: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });
  });

  describe("Serialize -> Deserialize flow", () => {
    describe("Account", () => {
      it("should not alter account", () => {
        const account: Account = {
          id: "id",
          name: "name",
          address: "address",
          currency: "currency",
          balance: new BigNumber(0),
          spendableBalance: new BigNumber(0),
          blockHeight: 0,
          lastSyncDate: date,
        };

        const serializedAccount = serializeAccount(account);
        const stringifiedAccount = JSON.stringify(serializedAccount);
        const parsedAccount = JSON.parse(stringifiedAccount) as RawAccount;
        const expectedAccount = deserializeAccount(parsedAccount);

        expect(account).toEqual(expectedAccount);
      });
    });

    describe("Transaction", () => {
      it("should not alter transaction", () => {
        const transaction: Transaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family: schemaFamilies.enum.ethereum,
          nonce: 123,
          data: Buffer.from("test"),
          gasPrice: new BigNumber(0),
          gasLimit: new BigNumber(0),
        };

        const serializedTransaction = serializeTransaction(transaction);
        const stringifiedTransaction = JSON.stringify(serializedTransaction);
        const parsedTransaction = JSON.parse(
          stringifiedTransaction
        ) as RawTransaction;
        const expectedTransaction = deserializeTransaction(parsedTransaction);

        expect(transaction).toEqual(expectedTransaction);
      });
    });
  });
});
