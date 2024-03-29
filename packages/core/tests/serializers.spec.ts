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
  RawNearTransaction,
  RawNeoTransaction,
  NearTransaction,
  NeoTransaction,
  ElrondTransaction,
  RawElrondTransaction,
  CardanoTransaction,
  RawCardanoTransaction,
  RawSolanaTransaction,
  SolanaTransaction,
  VechainTransaction,
  RawVechainTransaction,
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

      it("should succeed to serialize a cosmos transaction with fees, gas, memo, validators and sourceValidator", () => {
        const transaction: CosmosTransaction = {
          family,
          mode: "send",
          fees: new BigNumber(1),
          gas: new BigNumber(4),
          memo: "memo",
          amount: new BigNumber(100),
          recipient: "recipient",
          validators: [{ address: "recipient", amount: new BigNumber(100) }],
          sourceValidator: "sourceValidator",
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
          validators: [{ address: "recipient", amount: "100" }],
          sourceValidator: "sourceValidator",
        });
      });

      it("should succeed to serialize a cosmos transaction without fees, gas, memo, validators and sourceValidator", () => {
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
          validators: undefined,
          sourceValidator: undefined,
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
          memoType: "MEMO_TEXT",
          memoValue: "memo value",
          amount: new BigNumber(100),
          recipient: "recipient",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          fees: "1",
          memoType: "MEMO_TEXT",
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

      it("should succeed to serialize a tron transaction with votes", () => {
        const transaction: TronTransaction = {
          family,
          mode: "vote",
          amount: new BigNumber(100),
          recipient: "recipient",
          votes: [
            { address: "recipient", voteCount: 50 },
            { address: "recipient2", voteCount: 50 },
          ],
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          mode: "vote",
          resource: undefined,
          duration: undefined,
          amount: "100",
          recipient: "recipient",
          votes: [
            { address: "recipient", voteCount: 50 },
            { address: "recipient2", voteCount: 50 },
          ],
        });
      });
    });

    describe("near", () => {
      function createTx(): NearTransaction {
        return {
          family: schemaFamilies.enum.near,
          amount: BigNumber(100),
          recipient: "recipient",
          mode: "send",
        };
      }

      it("should succeed to serialize a near transaction", () => {
        const tx = createTx();
        const rawTx = serializeTransaction(tx);

        expect(rawTx).toEqual({
          ...tx,
          amount: "100",
        });
      });

      it("should succeed to serialize a near transaction, with options", () => {
        const tx = createTx();
        const rawTx = serializeTransaction({ ...tx, fees: BigNumber(1) });

        expect(rawTx).toEqual({
          ...tx,
          amount: "100",
          fees: "1",
        });
      });
    });

    describe("neo", () => {
      function createTx(): NeoTransaction {
        return {
          family: schemaFamilies.enum.neo,
          amount: BigNumber(100),
          recipient: "recipient",
        };
      }

      it("should succeed to serialize a neo transaction", () => {
        const tx = createTx();
        const rawTx = serializeTransaction(tx);

        expect(rawTx).toEqual({
          ...tx,
          amount: "100",
        });
      });
    });

    describe("elrond", () => {
      const family = schemaFamilies.enum.elrond;

      it("should serialize an Elrond transaction with data and fees", () => {
        const transaction: ElrondTransaction = {
          amount: new BigNumber(100),
          data: "test",
          family,
          fees: new BigNumber(100),
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          amount: "100",
          data: "test",
          gasLimit: 0,
          family,
          fees: "100",
          mode: "send",
          recipient: "recipient",
        });
      });

      it("should serialize an Elrond transaction without data and fees", () => {
        const transaction: ElrondTransaction = {
          amount: new BigNumber(100),
          family,
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          amount: "100",
          data: undefined,
          gasLimit: 0,
          family,
          fees: undefined,
          mode: "send",
          recipient: "recipient",
        });
      });
    });

    describe("cardano", () => {
      const family = schemaFamilies.enum.cardano;

      it("should serialize a Cardano transaction", () => {
        const transaction: CardanoTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          mode: "test",
          memo: "test2",
          fees: new BigNumber(100),
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          mode: "test",
          memo: "test2",
          fees: "100",
        });
      });

      it("should serialize a Cardano transaction whithout optional params", () => {
        const transaction: CardanoTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          mode: "test",
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          mode: "test",
          memo: undefined,
          fees: undefined,
        });
      });
    });

    describe("solana", () => {
      const family = schemaFamilies.enum.solana;

      it("should serialize a Solana transaction", () => {
        const transaction: SolanaTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          model: {
            kind: "transfer",
            uiState: {
              memo: "test",
            },
          },
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          model: '{"kind":"transfer","uiState":{"memo":"test"}}',
        });
      });

      it("should serialize a Solana transaction with type CommandDescriptor", () => {
        const transaction: SolanaTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          model: {
            kind: "transfer",
            uiState: {
              memo: "test",
            },
            commandDescriptor: {
              command: {
                kind: "stake.split",
                authorizedAccAddr: "test",
                stakeAccAddr: "test",
                amount: 100,
                seed: "test",
                splitStakeAccAddr: "test",
              },
              fee: 100,
              warnings: {
                Warning: { name: "warning", message: "warning message" },
              },
              errors: {
                Error: { name: "error", message: "error message" },
              },
            },
          },
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          model:
            '{"kind":"transfer","uiState":{"memo":"test"},"commandDescriptor":{"command":{"kind":"stake.split","authorizedAccAddr":"test","stakeAccAddr":"test","amount":100,"seed":"test","splitStakeAccAddr":"test"},"fee":100,"warnings":{"Warning":{"name":"warning","message":"warning message"}},"errors":{"Error":{"name":"error","message":"error message"}}}}',
        });
      });
    });

    describe("vechain", () => {
      const family = schemaFamilies.enum.vechain;

      it("should serialize a Vechain transaction", () => {
        const transaction: VechainTransaction = {
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          estimatedFees: "0",
          body: {
            chainTag: 0,
            blockRef: "",
            expiration: 0,
            clauses: [],
            gasPriceCoef: 0,
            gas: 0,
            dependsOn: null,
            nonce: 0,
          },
        };
        const serializedTransaction = serializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: "100",
          recipient: "recipient",
          estimatedFees: "0",
          body: {
            chainTag: 0,
            blockRef: "",
            expiration: 0,
            clauses: [],
            gasPriceCoef: 0,
            gas: 0,
            dependsOn: null,
            nonce: 0,
          },
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
          memoType: "MEMO_TEXT",
          memoValue: "memo value",
          amount: "100",
          recipient: "recipient",
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          fees: new BigNumber(1),
          memoType: "MEMO_TEXT",
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

    describe("near", () => {
      function createRawTx(): RawNearTransaction {
        return {
          family: schemaFamilies.enum.near,
          mode: "send",
          amount: "100",
          recipient: "recipient",
        };
      }

      it("should succeed to deserialize a near transaction", () => {
        const rawTx = createRawTx();
        const tx = deserializeTransaction(rawTx);

        expect(tx).toEqual({
          ...rawTx,
          amount: new BigNumber(100),
        });
      });

      it("should succeed to deserialize a near transaction with fees", () => {
        const rawTx = createRawTx();
        const tx = deserializeTransaction({ ...rawTx, fees: "1" });

        expect(tx).toEqual({
          ...rawTx,
          amount: new BigNumber(100),
          fees: new BigNumber(1),
        });
      });
    });

    describe("neo", () => {
      function createRawTx(): RawNeoTransaction {
        return {
          family: schemaFamilies.enum.neo,
          amount: "100",
          recipient: "recipient",
        };
      }

      it("should succeed to deserialize a neo transaction", () => {
        const rawTx = createRawTx();
        const tx = deserializeTransaction(rawTx);

        expect(tx).toEqual({
          ...rawTx,
          amount: new BigNumber(100),
        });
      });
    });

    describe("elrond", () => {
      const family = schemaFamilies.enum.elrond;

      it("should serialize an Elrond transaction with data and fees", () => {
        const serializedTransaction: RawElrondTransaction = {
          amount: "100",
          data: "test",
          family,
          fees: "100",
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          amount: new BigNumber(100),
          data: "test",
          family,
          fees: new BigNumber(100),
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        });
      });

      it("should serialize an Elrond transaction without data and fees", () => {
        const serializedTransaction: RawElrondTransaction = {
          amount: "100",
          family,
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          amount: new BigNumber(100),
          data: undefined,
          family,
          fees: undefined,
          mode: "send",
          recipient: "recipient",
          gasLimit: 0,
        });
      });
    });

    describe("cardano", () => {
      const family = schemaFamilies.enum.cardano;

      it("should deserialize a Cardano transaction", () => {
        const transaction: RawCardanoTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
          mode: "test",
          memo: "test2",
          fees: "100",
        };
        const serializedTransaction = deserializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          mode: "test",
          memo: "test2",
          fees: new BigNumber(100),
        });
      });

      it("should deserialize a Cardano transaction without optional params", () => {
        const transaction: RawCardanoTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
          mode: "test",
        };
        const serializedTransaction = deserializeTransaction(transaction);

        expect(serializedTransaction).toEqual({
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          mode: "test",
          memo: undefined,
          fees: undefined,
        });
      });
    });

    describe("solana", () => {
      const family = schemaFamilies.enum.solana;

      it("should deserialize a Solana transaction", () => {
        const serializedTransaction: RawSolanaTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
          model: '{"kind":"transfer","uiState":{"memo":"test"}}',
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          model: {
            kind: "transfer",
            uiState: {
              memo: "test",
            },
          },
        });
      });

      it("should deserialize a Solana transaction with type CommandDescriptor", () => {
        const serializedTransaction: RawSolanaTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
          model:
            '{"kind":"transfer","uiState":{"memo":"test"},"commandDescriptor":{"command":{"kind":"stake.split","authorizedAccAddr":"test","stakeAccAddr":"test","amount":100,"seed":"test","splitStakeAccAddr":"test"},"fee":100,"warnings":{"Warning":{"name":"warning","message":"warning message"}},"errors":{"Error":{"name":"error","message":"error message"}}}}',
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          model: {
            kind: "transfer",
            uiState: {
              memo: "test",
            },
            commandDescriptor: {
              command: {
                kind: "stake.split",
                authorizedAccAddr: "test",
                stakeAccAddr: "test",
                amount: 100,
                seed: "test",
                splitStakeAccAddr: "test",
              },
              fee: 100,
              warnings: {
                Warning: { name: "warning", message: "warning message" },
              },
              errors: {
                Error: { name: "error", message: "error message" },
              },
            },
          },
        });
      });
    });

    describe("vechain", () => {
      const family = schemaFamilies.enum.vechain;

      it("should deserialize a Solana transaction", () => {
        const serializedTransaction: RawVechainTransaction = {
          family,
          amount: "100",
          recipient: "recipient",
          estimatedFees: "0",
          body: {
            chainTag: 0,
            blockRef: "",
            expiration: 0,
            clauses: [],
            gasPriceCoef: 0,
            gas: 0,
            dependsOn: null,
            nonce: 0,
          },
        };

        const transaction = deserializeTransaction(serializedTransaction);

        expect(transaction).toEqual({
          family,
          amount: new BigNumber(100),
          recipient: "recipient",
          estimatedFees: "0",
          body: {
            chainTag: 0,
            blockRef: "",
            expiration: 0,
            clauses: [],
            gasPriceCoef: 0,
            gas: 0,
            dependsOn: null,
            nonce: 0,
          },
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
          stringifiedTransaction,
        ) as RawTransaction;
        const expectedTransaction = deserializeTransaction(parsedTransaction);

        expect(transaction).toEqual(expectedTransaction);
      });
    });
  });
});
