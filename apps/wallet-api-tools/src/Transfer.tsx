"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { BigNumber } from "bignumber.js";

import {
  Account,
  BitcoinTransaction,
  // BitcoinTransaction,
  Currency,
  EthereumTransaction,
  ExchangeType,
  // EthereumTransaction,
  FeesLevel,
  WindowMessageTransport,
} from "@ledgerhq/wallet-api-core";
import getData from "./lib/getData";

/**
 * FIXME: for now only these currencies are handled for test purposes.
 * Would need to generate test config for other assets to expend the list
 */
const AVAILABLE_CURRENCIES = [
  "bitcoin",
  "ethereum",
  "ethereum/erc20/usd_tether__erc20_",
];

type Request = {
  provider: string;
  amountFrom: string;
  from: string;
  refundAddress: string;
  deviceTransactionId: string;
};

type Data = {
  binaryPayload: Buffer;
  signature: Buffer;
  amountExpectedFrom: number;
  payinAddress: string;
};

const initialRequest: Request = {
  provider: "",
  amountFrom: "",
  from: "",
  refundAddress: "",
  deviceTransactionId: "",
};

// Test partner name
const provider = "TEST_FUND";

/**
 * This poc could be extended in order to support some minimal validation of
 * the inputs, but my take on it is that it would blurry the bottom-line and
 * not contribute much to the discussion.
 */
const Transfer = ({ exchangeType }: { exchangeType: "SELL" | "FUND" }) => {
  const instanceRef = useRef<WalletAPIClient | null>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    const transport = new WindowMessageTransport();
    instanceRef.current = new WalletAPIClient(transport);
    transport.connect();
    setMounted(true);

    return () => {
      transport.disconnect();
    };
  }, []);

  const [currencies, setCurrencies] = useState<Currency[]>();
  const [nonce, setNonce] = useState("");
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState<Account>();
  const [feesStrategy, setFeesStrategy] = useState(FeesLevel.Slow);
  const [data, setData] = useState<Data>();

  const [request, setRequest] = useState<Request>(initialRequest);

  useEffect(() => {
    if (!instanceRef.current) {
      return;
    }

    const api = instanceRef.current;

    const func = async () => {
      const allCurrencies = await api.currency.list({
        currencyIds: ["ethereum", "bitcoin"],
      });

      setCurrencies(allCurrencies);
    };

    void func();
  }, [isMounted]);

  const requestFrom = useCallback(() => {
    if (!instanceRef.current) {
      return;
    }

    const api = instanceRef.current;

    const func = async () => {
      const selectedAccount = await api.account.request({
        currencyIds: AVAILABLE_CURRENCIES,
      });

      setFromAccount(selectedAccount);
    };

    void func();
  }, []);

  const requestNonce = useCallback(() => {
    if (!instanceRef.current) {
      return;
    }

    const api = instanceRef.current;

    const func = async () => {
      const newNonce = await api.exchange.start(exchangeType);

      setNonce(newNonce);
    };

    void func();
  }, [exchangeType]);

  // request fund or sell from partner using data in request, to get "binaryPayload" and "signature"
  const requestData = useCallback(() => {
    const currency = currencies?.find(
      (cur) => cur.id === fromAccount?.currency
    );

    if (!currency) {
      throw new Error("currency not found");
    }

    /*
                        const amountToFund = parseCurrencyUnit(
                          currency.units[0],
                          request.amountFrom
                        );
                        */

    const newData = getData({
      exchangeType: ExchangeType[exchangeType],
      txId: request.deviceTransactionId,
      amount: 1000,
      ticker: currency.ticker,
    });
    setData(newData);
  }, [request, currencies, fromAccount, exchangeType]);

  const completeExchange = useCallback(async () => {
    if (!instanceRef.current) {
      throw new Error("instance was not defined");
    }

    const api = instanceRef.current;

    if (!data) {
      throw new Error("'data' is undefined");
    }

    if (!fromAccount) {
      throw new Error("'fromAccount' is undefined");
    }

    const currency = currencies?.find(
      (cur) => cur.id === fromAccount?.currency
    );

    if (!currency) {
      throw new Error("currency not found");
    }

    const family = (
      currency.type === "CryptoCurrency" ? currency.family : currency.parent
    ) as "bitcoin" | "ethereum"; // dirty hack

    // FIXME: need to genetare a tx based on family (currency)
    const transaction: BitcoinTransaction | EthereumTransaction = {
      amount: new BigNumber(data.amountExpectedFrom),
      recipient: data.payinAddress,
      family,
    };

    // Receive an operation object with the broadcasted transaction information including tx hash.
    const result = await api.exchange.completeFund({
      provider,
      fromAccountId: fromAccount.id,
      transaction,
      binaryPayload: data.binaryPayload,
      signature: data.signature,
      feeStrategy: "MEDIUM",
    });
    console.log("RESULT: ", result);
  }, [fromAccount, data, feesStrategy, exchangeType, currencies]);

  // Progressively build the request object that will be used to request a fund or sell with partner
  useEffect(() => {
    setRequest({
      provider,
      amountFrom: amount,
      from: fromAccount?.currency || "",
      refundAddress: fromAccount?.address || "",
      deviceTransactionId: nonce,
    });
  }, [fromAccount, nonce, amount]);

  return (
    <div>
      <div>
        <button onClick={requestFrom}>{"From"}</button>
        <input
          type="number"
          disabled={!fromAccount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="amount"
        />
        <select
          disabled={!fromAccount}
          onChange={(event) => setFeesStrategy(event.target.value as FeesLevel)}
          placeholder="fees"
        >
          <option value={FeesLevel.Slow}>Slow</option>
          <option value={FeesLevel.Medium}>Medium</option>
          <option value={FeesLevel.Fast}>Fast</option>
        </select>
        <button disabled={!amount} onClick={requestNonce}>
          {"Start"}
        </button>

        <button disabled={!nonce} onClick={requestData}>
          {`Request ${exchangeType}`}
        </button>
        <button
          disabled={!data}
          onClick={() => {
            void completeExchange();
          }}
        >
          {"Complete"}
        </button>
      </div>
      {/* Debug information */}
      <div>
        {request && (
          <>
            <h2>{`Local ${exchangeType} data`}</h2>
            <pre>{JSON.stringify(request, null, 2)}</pre>
          </>
        )}
        {data && (
          <>
            <h2>{`Provider ${exchangeType} data`}</h2>
            <pre>
              {JSON.stringify(
                {
                  ...data,
                  /**
                   * Note: display "binaryPayload" and "signature" buffers as
                   * hex string for readability
                   */
                  binaryPayload: data.binaryPayload.toString("hex"),
                  signature: data.signature.toString("hex"),
                },
                null,
                2
              )}
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default Transfer;
