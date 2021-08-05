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

    it("should succeed to serialize an bitcoin transaction with feePerByte", () => {
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

    it("should succeed to serialize an bitcoin transaction without feePerByte", () => {
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
    it("should succeed to deserialize a ethereum transaction with data, gasPrice & gasLimit", () => {
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

    it("should succeed to deserialize a ethereum transaction without data, gasPrice & gasLimit", () => {
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
