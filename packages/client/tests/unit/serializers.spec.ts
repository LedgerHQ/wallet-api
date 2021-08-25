import { expect } from "chai";
import BigNumber from "bignumber.js";
import FAMILIES from "../../src/families/types";
import * as serializers from "../../src/serializers";
import type { Account, SignedTransaction, Transaction } from "../../src/types";
import type {
  RawAccount,
  RawSignedTransaction,
  RawTransaction,
} from "../../src/rawTypes";
import type {
  BitcoinTransaction,
  RawBitcoinTransaction,
} from "../../src/families/bitcoin/types";
import type {
  EthereumTransaction,
  RawEthereumTransaction,
} from "../../src/families/ethereum/types";
import {
  AlgorandTransaction,
  RawAlgorandTransaction,
} from "../../src/families/algorand/types";
import {
  CosmosTransaction,
  RawCosmosTransaction,
} from "../../src/families/cosmos/types";
import {
  CryptoOrgTransaction,
  RawCryptoOrgTransaction,
} from "../../src/families/crypto_org/types";
import {
  PolkadotTransaction,
  RawPolkadotTransaction,
} from "../../src/families/polkadot/types";
import {
  RawRippleTransaction,
  RippleTransaction,
} from "../../src/families/ripple/types";
import {
  RawStellarTransaction,
  StellarTransaction,
} from "../../src/families/stellar/types";
import {
  RawTezosTransaction,
  TezosTransaction,
} from "../../src/families/tezos/types";
import {
  RawTronTransaction,
  TronTransaction,
} from "../../src/families/tron/types";

const date = new Date();
describe("serializers.ts", () => {
  describe("serializeAccount", () => {
    it("should succeed to serialize an account", () => {
      const serializedAccount = serializers.serializeAccount({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: new BigNumber(0),
        spendableBalance: new BigNumber(0),
        blockHeight: 0,
        lastSyncDate: date,
      });

      expect(serializedAccount).to.deep.eq({
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
      const deserializedAccount = serializers.deserializeAccount({
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: "0",
        spendableBalance: "0",
        blockHeight: 0,
        lastSyncDate: date.toISOString(),
      });

      expect(deserializedAccount).to.deep.eq({
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
          family: FAMILIES.ETHEREUM,
          nonce: 123,
          data: Buffer.from([]),
          gasPrice: new BigNumber(0),
          gasLimit: new BigNumber(0),
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
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
          family: FAMILIES.ETHEREUM,
          nonce: 123,
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
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
          family: FAMILIES.BITCOIN,
          feePerByte: new BigNumber(0),
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
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
          family: FAMILIES.BITCOIN,
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
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
          family: FAMILIES.ALGORAND,
          mode: "claimReward",
          fees: new BigNumber(1),
          assetId: "assetId",
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.ALGORAND,
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
          family: FAMILIES.ALGORAND,
          mode: "claimReward",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.ALGORAND,
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
          family: FAMILIES.COSMOS,
          mode: "send",
          fees: new BigNumber(1),
          gas: new BigNumber(4),
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.COSMOS,
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
          family: FAMILIES.COSMOS,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.COSMOS,
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
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a crypto.org transaction without fees", () => {
        const transaction: CryptoOrgTransaction = {
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.CRYPTO_ORG,
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
          family: FAMILIES.POLKADOT,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.POLKADOT,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a polkadot transaction without fee and era", () => {
        const transaction: PolkadotTransaction = {
          family: FAMILIES.POLKADOT,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.POLKADOT,
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
          family: FAMILIES.RIPPLE,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.RIPPLE,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a ripple transaction without fee", () => {
        const transaction: RippleTransaction = {
          family: FAMILIES.RIPPLE,
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.RIPPLE,
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
          family: FAMILIES.STELLAR,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.STELLAR,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a stellar transaction without fees, memoType and memoValue", () => {
        const transaction: StellarTransaction = {
          family: FAMILIES.STELLAR,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.STELLAR,
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
          family: FAMILIES.TEZOS,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.TEZOS,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tezos transaction without fees and gasLimit", () => {
        const transaction: TezosTransaction = {
          family: FAMILIES.TEZOS,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.TEZOS,
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
          family: FAMILIES.TRON,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.TRON,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        });
      });

      it("should succeed to serialize a tron transaction without resource and duration", () => {
        const transaction: TronTransaction = {
          family: FAMILIES.TRON,
          mode: "send",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction =
          serializers.serializeTransaction(transaction);

        expect(serializedTransaction).to.deep.eq({
          family: FAMILIES.TRON,
          mode: "send",
          resource: undefined,
          duration: undefined,
          amount: "100",
          recipient: "recipient",
        });
      });
    });

    it("should fail to serialize an unsupported family", () => {
      const transaction = {
        amount: new BigNumber(100),
        recipient: "recipient",
        family: "unsupported-family",
      };

      const serializeTransaction = () =>
        // @ts-ignore: unreachable in TS
        serializers.serializeTransaction(transaction);

      expect(serializeTransaction)
        .to.throw()
        .with.property(
          "message",
          "Can't serialize transaction: family not supported"
        );
    });
  });

  describe("deserializeTransaction", () => {
    describe("ethereum", () => {
      it("should succeed to deserialize an ethereum transaction with data, gasPrice & gasLimit", () => {
        const serializedTransaction: RawEthereumTransaction = {
          family: FAMILIES.ETHEREUM,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
          data: "data",
          gasPrice: "456",
          gasLimit: "789",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.ETHEREUM,
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
          family: FAMILIES.ETHEREUM,
          amount: "0",
          recipient: "recipient",
          nonce: 123,
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.ETHEREUM,
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
          family: FAMILIES.BITCOIN,
          amount: "0",
          recipient: "recipient",
          feePerByte: "10",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.BITCOIN,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: new BigNumber(10),
        });
      });

      it("should succeed to deserialize a bitcoin transaction without feePerByte", () => {
        const serializedTransaction: RawBitcoinTransaction = {
          family: FAMILIES.BITCOIN,
          amount: "0",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.BITCOIN,
          amount: new BigNumber(0),
          recipient: "recipient",
          feePerByte: undefined,
        });
      });
    });

    describe("algorand", () => {
      it("should succeed to deserialize an algorand transaction with fees, assetId and memo", () => {
        const serializedTransaction: RawAlgorandTransaction = {
          family: FAMILIES.ALGORAND,
          mode: "claimReward",
          fees: "1",
          assetId: "assetId",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.ALGORAND,
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
          family: FAMILIES.ALGORAND,
          mode: "claimReward",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.ALGORAND,
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
          family: FAMILIES.COSMOS,
          mode: "send",
          fees: "1",
          gas: "4",
          memo: "memo",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.COSMOS,
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
          family: FAMILIES.COSMOS,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.COSMOS,
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
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          fees: "1",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          fees: new BigNumber(1),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a crypto.org transaction without fees", () => {
        const serializedTransaction: RawCryptoOrgTransaction = {
          family: FAMILIES.CRYPTO_ORG,
          mode: "mode",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.CRYPTO_ORG,
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
          family: FAMILIES.POLKADOT,
          mode: "send",
          fee: "1",
          era: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.POLKADOT,
          mode: "send",
          fee: new BigNumber(1),
          era: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a polkadot transaction without fee and era", () => {
        const serializedTransaction: RawPolkadotTransaction = {
          family: FAMILIES.POLKADOT,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.POLKADOT,
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
          family: FAMILIES.RIPPLE,
          fee: "1",
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.RIPPLE,
          fee: new BigNumber(1),
          tag: 4,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a ripple transaction without fee", () => {
        const serializedTransaction: RawRippleTransaction = {
          family: FAMILIES.RIPPLE,
          tag: 4,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.RIPPLE,
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
          family: FAMILIES.STELLAR,
          fees: "1",
          memoType: "memo type",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.STELLAR,
          fees: new BigNumber(1),
          memoType: "memo type",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a stellar transaction without fees, memoType and memoValue", () => {
        const serializedTransaction: RawStellarTransaction = {
          family: FAMILIES.STELLAR,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.STELLAR,
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
          family: FAMILIES.TEZOS,
          mode: "send",
          fees: "1",
          gasLimit: "5",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.TEZOS,
          mode: "send",
          fees: new BigNumber(1),
          gasLimit: new BigNumber(5),
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tezos transaction without fees and gasLimit", () => {
        const serializedTransaction: RawTezosTransaction = {
          family: FAMILIES.TEZOS,
          mode: "send",
          fees: undefined,
          gasLimit: undefined,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.TEZOS,
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
          family: FAMILIES.TRON,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.TRON,
          mode: "send",
          resource: "BANDWIDTH",
          duration: 5,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });

      it("should succeed to deserialize a tron transaction without resource and duration", () => {
        const serializedTransaction: RawTronTransaction = {
          family: FAMILIES.TRON,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = serializers.deserializeTransaction(
          serializedTransaction
        );

        expect(transaction).to.deep.eq({
          family: FAMILIES.TRON,
          mode: "send",
          resource: undefined,
          duration: undefined,
          amount: new BigNumber(100),
          recipient: "recipient",
        });
      });
    });

    it("should fail to deserialize an unsupported family", () => {
      const transaction = {
        amount: "100",
        recipient: "recipient",
        family: "unsupported-family",
      };

      const deserializeTransaction = () =>
        // @ts-ignore: unreachable in TS
        serializers.deserializeTransaction(transaction);

      expect(deserializeTransaction)
        .to.throw()
        .with.property(
          "message",
          "Can't deserialize transaction: family not supported"
        );
    });
  });

  describe("serializeSignedTransaction", () => {
    it("should succeed to serialize a signed transaction", () => {
      const serializedTransaction = serializers.serializeSignedTransaction({
        operation: null,
        signature: "signature",
        signatureRaw: null,
        expirationDate: date,
      });
      const serializedTransactionWithoutExpDate =
        serializers.serializeSignedTransaction({
          operation: null,
          signature: "signature",
          signatureRaw: null,
          expirationDate: null,
        });

      expect(serializedTransaction).to.deep.eq({
        operation: null,
        signature: "signature",
        expirationDate: date.toISOString(),
        signatureRaw: null,
      });

      expect(serializedTransactionWithoutExpDate).to.deep.eq({
        operation: null,
        signature: "signature",
        expirationDate: null,
        signatureRaw: null,
      });
    });
  });

  describe("deserializeSignedTransaction", () => {
    it("should succeed to deserialize a raw signed transaction", () => {
      const transaction = serializers.deserializeSignedTransaction({
        operation: null,
        signature: "signature",
        signatureRaw: null,
        expirationDate: date.toISOString(),
      });
      const transactionWithoutExpDate =
        serializers.deserializeSignedTransaction({
          operation: null,
          signature: "signature",
          signatureRaw: null,
          expirationDate: null,
        });

      expect(transaction).to.deep.eq({
        operation: {},
        signature: "signature",
        expirationDate: date,
        signatureRaw: null,
      });
      expect(transactionWithoutExpDate).to.deep.eq({
        operation: {},
        signature: "signature",
        expirationDate: null,
        signatureRaw: null,
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

        const serializedAccount = serializers.serializeAccount(account);
        const stringifiedAccount = JSON.stringify(serializedAccount);
        const parsedAccount = JSON.parse(stringifiedAccount) as RawAccount;
        const expectedAccount = serializers.deserializeAccount(parsedAccount);

        expect(account).to.deep.eq(expectedAccount);
      });
    });

    describe("Transaction", () => {
      it("should not alter transaction", () => {
        const transaction: Transaction = {
          amount: new BigNumber(100),
          recipient: "recipient",
          family: FAMILIES.ETHEREUM,
          nonce: 123,
          data: Buffer.from("test"),
          gasPrice: new BigNumber(0),
          gasLimit: new BigNumber(0),
        };

        const serializedTransaction =
          serializers.serializeTransaction(transaction);
        const stringifiedTransaction = JSON.stringify(serializedTransaction);
        const parsedTransaction = JSON.parse(
          stringifiedTransaction
        ) as RawTransaction;
        const expectedTransaction =
          serializers.deserializeTransaction(parsedTransaction);

        expect(transaction).to.deep.eq(expectedTransaction);
      });
    });

    describe("SignedTransaction", () => {
      it("should not alter SignedTransaction", () => {
        const signedTransaction: SignedTransaction = {
          operation: {},
          signature: "signature",
          signatureRaw: null,
          expirationDate: date,
        };

        const serializedSignedTransaction =
          serializers.serializeSignedTransaction(signedTransaction);
        const stringifiedSignedTransaction = JSON.stringify(
          serializedSignedTransaction
        );
        const parsedSignedTransaction = JSON.parse(
          stringifiedSignedTransaction
        ) as RawSignedTransaction;
        const expectedSignedTransaction =
          serializers.deserializeSignedTransaction(parsedSignedTransaction);

        expect(signedTransaction).to.deep.eq(expectedSignedTransaction);
      });
    });
  });
});
