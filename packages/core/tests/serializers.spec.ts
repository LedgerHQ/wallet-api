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
  FAMILIES,
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
      it("should succeed to serialize an ethereum transaction with data, gasPrice & gasLimit", () => {
        const transaction: EthereumTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family: FAMILIES.Ethereum,
          nonce: 123,
          data: Buffer.from([]),
          gasPrice: new BigNumber(0),
          gasLimit: new BigNumber(0),
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: "ethereum",
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
          family: FAMILIES.Ethereum,
          nonce: 123,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: "ethereum",
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
      it("should succeed to serialize a bitcoin transaction with feePerByte", () => {
        const transaction: BitcoinTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family: FAMILIES.Bitcoin,
          feePerByte: new BigNumber(0),
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: "bitcoin",
          amount: "100",
          recipient: "recipient",
          feePerByte: "0",
        });
      });

      it("should succeed to serialize a bitcoin transaction without feePerByte", () => {
        const transaction: BitcoinTransaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family: FAMILIES.Bitcoin,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: "bitcoin",
          amount: "100",
          recipient: "recipient",
          feePerByte: undefined,
        });
      });
    });

    describe("algorand", () => {
      it("should succeed to serialize an algorand transaction with fees, assetId and memo", () => {
        const transaction: AlgorandTransaction = {
          family: FAMILIES.Algorand,
          mode: "claimReward",
          fees: new BigNumber(1),
          assetId: "assetId",
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Algorand,
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
          family: FAMILIES.Algorand,
          mode: "claimReward",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Algorand,
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
      it("should succeed to serialize a cosmos transaction with fees, gas and memo", () => {
        const transaction: CosmosTransaction = {
          family: FAMILIES.Cosmos,
          mode: "send",
          fees: new BigNumber(1),
          gas: new BigNumber(4),
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Cosmos,
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
          family: FAMILIES.Cosmos,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Cosmos,
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
      it("should succeed to serialize a crypto.org transaction with fees", () => {
        const transaction: CryptoOrgTransaction = {
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a crypto.org transaction without fees", () => {
        const transaction: CryptoOrgTransaction = {
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("polkadot", () => {
      it("should succeed to serialize a polkadot transaction with fee and era", () => {
        const transaction: PolkadotTransaction = {
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a polkadot transaction without fee and era", () => {
        const transaction: PolkadotTransaction = {
          family: FAMILIES.Polkadot,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: undefined,
          era: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("ripple", () => {
      it("should succeed to serialize a ripple transaction with fee", () => {
        const transaction: RippleTransaction = {
          family: FAMILIES.Ripple,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Ripple,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a ripple transaction without fee", () => {
        const transaction: RippleTransaction = {
          family: FAMILIES.Ripple,
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Ripple,
          fee: undefined,
          tag: 4,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("stellar", () => {
      it("should succeed to serialize a stellar transaction with fees, memoType and memoValue", () => {
        const transaction: StellarTransaction = {
          family: FAMILIES.Stellar,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Stellar,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a stellar transaction without fees, memoType and memoValue", () => {
        const transaction: StellarTransaction = {
          family: FAMILIES.Stellar,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Stellar,
          fees: undefined,
          memoType: undefined,
          memoValue: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("tezos", () => {
      it("should succeed to serialize a tezos transaction with fees and gasLimit", () => {
        const transaction: TezosTransaction = {
          family: FAMILIES.Tezos,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Tezos,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tezos transaction without fees and gasLimit", () => {
        const transaction: TezosTransaction = {
          family: FAMILIES.Tezos,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Tezos,
          mode: "send",
          fees: undefined,
          gasLimit: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    describe("tron", () => {
      it("should succeed to serialize a tron transaction with resource and duration", () => {
        const transaction: TronTransaction = {
          family: FAMILIES.Tron,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Tron,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tron transaction without resource and duration", () => {
        const transaction: TronTransaction = {
          family: FAMILIES.Tron,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family: FAMILIES.Tron,
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
      it("should succeed to deserialize an ethereum transaction with data, gasPrice & gasLimit", () => {
        const serializedTransaction: RawEthereumTransaction = {
          family: FAMILIES.Ethereum,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
          data: "data",
          gasPrice: "456",
          gasLimit: "789",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Ethereum,
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
          family: FAMILIES.Ethereum,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Ethereum,
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
      it("should succeed to deserialize a bitcoin transaction with feePerByte", () => {
        const serializedTransaction: RawBitcoinTransaction = {
          family: FAMILIES.Bitcoin,
          amount: "0",
          recipient: "recipient",
          feePerByte: "10",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Bitcoin,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: new BigNumber(10),
        });
      });

      it("should succeed to deserialize a bitcoin transaction without feePerByte", () => {
        const serializedTransaction: RawBitcoinTransaction = {
          family: FAMILIES.Bitcoin,
          amount: "0",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Bitcoin,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: undefined,
        });
      });
    });

    describe("algorand", () => {
      it("should succeed to deserialize an algorand transaction with fees, assetId and memo", () => {
        const serializedTransaction: RawAlgorandTransaction = {
          family: FAMILIES.Algorand,
          mode: "claimReward",
          fees: "1",
          assetId: "assetId",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Algorand,
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
          family: FAMILIES.Algorand,
          mode: "claimReward",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Algorand,
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
      it("should succeed to deserialize a cosmos transaction with fees, gas and memo", () => {
        const serializedTransaction: RawCosmosTransaction = {
          family: FAMILIES.Cosmos,
          mode: "send",
          fees: "1",
          gas: "4",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Cosmos,
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
          family: FAMILIES.Cosmos,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Cosmos,
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
      it("should succeed to deserialize a crypto.org transaction with fees", () => {
        const serializedTransaction: RawCryptoOrgTransaction = {
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a crypto.org transaction without fees", () => {
        const serializedTransaction: RawCryptoOrgTransaction = {
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.CryptoOrg,
          mode: "mode",
          fees: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("polkadot", () => {
      it("should succeed to deserialize a polkadot transaction with fee and era", () => {
        const serializedTransaction: RawPolkadotTransaction = {
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a polkadot transaction without fee and era", () => {
        const serializedTransaction: RawPolkadotTransaction = {
          family: FAMILIES.Polkadot,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Polkadot,
          mode: "send",
          fee: undefined,
          era: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("ripple", () => {
      it("should succeed to deserialize a ripple transaction with fee", () => {
        const serializedTransaction: RawRippleTransaction = {
          family: FAMILIES.Ripple,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Ripple,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a ripple transaction without fee", () => {
        const serializedTransaction: RawRippleTransaction = {
          family: FAMILIES.Ripple,
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Ripple,
          fee: undefined,
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("stellar", () => {
      it("should succeed to deserialize a stellar transaction with fees, memoType and memoValue", () => {
        const serializedTransaction: RawStellarTransaction = {
          family: FAMILIES.Stellar,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Stellar,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a stellar transaction without fees, memoType and memoValue", () => {
        const serializedTransaction: RawStellarTransaction = {
          family: FAMILIES.Stellar,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Stellar,
          fees: undefined,
          memoType: undefined,
          memoValue: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("tezos", () => {
      it("should succeed to deserialize a tezos transaction with fees and gasLimit", () => {
        const serializedTransaction: RawTezosTransaction = {
          family: FAMILIES.Tezos,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Tezos,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tezos transaction without fees and gasLimit", () => {
        const serializedTransaction: RawTezosTransaction = {
          family: FAMILIES.Tezos,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Tezos,
          mode: "send",
          fees: undefined,
          gasLimit: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    describe("tron", () => {
      it("should succeed to deserialize a tron transaction with resource and duration", () => {
        const serializedTransaction: RawTronTransaction = {
          family: FAMILIES.Tron,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Tron,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tron transaction without resource and duration", () => {
        const serializedTransaction: RawTronTransaction = {
          family: FAMILIES.Tron,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family: FAMILIES.Tron,
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
          family: FAMILIES.Ethereum,
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
