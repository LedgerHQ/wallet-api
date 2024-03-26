"use client";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Transport, WindowMessageTransport } from "@ledgerhq/wallet-api-core";
import {
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "./Input";
import {
  MessageGrouped,
  Response,
  MessageOut,
  MessageInfo,
  ResponseResult,
  ResponseError,
  schemaRequest,
  Request,
  MessageIn,
  schemaResponse,
} from "./types";
import GroupedMessage from "./components/GroupedMessage";
import InfoMessage from "./components/InfoMessage";
import { ArrowDown } from "lucide-react";

const historyAtom = atomWithStorage<(MessageGrouped | MessageInfo)[]>(
  "history",
  [],
);

export function Editor() {
  const [history, setHistory] = useAtom(historyAtom);
  const searchParams = useSearchParams();
  const panelRef = useRef<HTMLDivElement>(null);
  const transportRef = useRef<Transport | null>(null);
  const [value, setValue] = useState<string>("");
  const [newElement, setNewElement] = useState<boolean>(false);
  const [scrollBottom, setScrollBottom] = useState(true);

  const handleReUse = (request: MessageOut) => {
    const parsedSentValue: Request = request.value;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, jsonrpc, ...initialRequest } = parsedSentValue;
    setValue(JSON.stringify(initialRequest, null, 2));
  };

  //update scrollBottom when the user scroll
  const handleScroll = () => {
    const element = panelRef.current;
    if (element) {
      setScrollBottom(() => {
        const isBottom = element.scrollTop >= 0;
        isBottom && setNewElement(false);
        return isBottom;
      });
    }
  };

  useEffect(() => {
    if (panelRef.current !== null) {
      !scrollBottom && setNewElement(true);
    }
  }, [history]);

  const scrollToBottom = () => {
    if (panelRef.current !== null) {
      panelRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setNewElement(false);
    }
  };
  const isSimulator = searchParams.get("simulator");

  const pushInfoMessage = useCallback(
    (type: "error" | "info", response: string) => {
      setHistory((prev) => [
        { date: new Date(), type, value: response },
        ...prev,
      ]);
    },
    [setHistory],
  );

  const pushOutgoingMessage = useCallback(
    (request: Request) => {
      setHistory((prev) => [
        {
          type: "group",
          id: request.id,
          date: new Date(),
          messages: {
            sent: {
              date: new Date(),
              type: "out",
              value: request,
            } as MessageOut,
            received: undefined,
          },
        },
        ...prev,
      ]);
    },
    [setHistory],
  );

  const pushReceivedMessage = useCallback(
    (response: ResponseResult | ResponseError) => {
      setHistory((prev) => {
        const updatedHistory = prev.map((item) => {
          if (item.type === "group" && item.id === response.id) {
            return {
              ...item,
              messages: {
                ...item.messages,
                received: {
                  date: new Date(),
                  type: "in",
                  value: response,
                } as MessageIn,
              },
            };
          }
          return item;
        });

        return updatedHistory;
      });
    },
    [setHistory],
  );

  const handleMessage = useCallback(
    (response: string) => {
      try {
        const parsedResponse: Response = schemaResponse.parse(
          JSON.parse(response),
        );

        if (parsedResponse.method) pushInfoMessage("info", "Update");

        if (parsedResponse.result)
          pushReceivedMessage(parsedResponse as ResponseResult);

        if (parsedResponse.error)
          pushReceivedMessage(parsedResponse as ResponseError);
      } catch (e) {
        console.error(e);
      }
    },
    [pushInfoMessage, pushReceivedMessage],
  );

  const scrollToBottomButton = (
    <div className="relative flex justify-center">
      <button
        className={`w-[max-content] ${newElement && "animate-bounce"} p-2 absolute bg-gray-600/50 bottom-0 mb-3 rounded`}
        onClick={() => {
          scrollToBottom();
        }}
      >
        <ArrowDown />
      </button>
    </div>
  );

  useEffect(() => {
    pushInfoMessage(
      "info",
      `Connected to ${isSimulator ? "simulator" : "software"} wallet`,
    );
    // real conditions
    if (!isSimulator) {
      const transport = new WindowMessageTransport();
      transport.onMessage = handleMessage;
      transport.connect();
      transportRef.current = transport;
      return () => {
        transport.disconnect();
        transportRef.current = null;
      };
    }

    // simulated wallet
    const transport = getSimulatorTransport(profiles.STANDARD);
    transport.onMessage = handleMessage;
    transportRef.current = transport;

    return () => {
      transportRef.current = null;
    };
  }, [handleMessage, isSimulator, pushInfoMessage]);

  const handleSend = useCallback(
    (input: string) => {
      const requestId = uuidv4();

      const transport = transportRef.current;

      try {
        if (!transport) {
          throw new Error("No transport initialized");
        }

        const parsedRequest = schemaRequest.parse(JSON.parse(input));

        const request: Request = {
          id: requestId,
          jsonrpc: "2.0",
          ...parsedRequest,
        };

        pushOutgoingMessage(request);

        transport.send(JSON.stringify(request, null, 2));
      } catch (error) {
        setHistory((prev) => [
          {
            date: new Date(),
            type: "error",
            value: String(error),
          },
          ...prev,
        ]);
      }
    },
    [pushOutgoingMessage, setHistory],
  );

  return (
    <div className="flex flex-col h-full">
      <div
        ref={panelRef}
        onScroll={handleScroll}
        className="flex-1 flex flex-col-reverse
       overflow-y-auto p-6 pb-6 gap-y-6"
      >
        {history.map((message, index) => {
          return (
            <>
              {index !== 0 && (
                <div className="w-full border-b border-[#666]"></div>
              )}

              {message.type === "group" ? (
                <GroupedMessage
                  handleReUse={handleReUse}
                  group={message.messages}
                  setValue={setValue}
                  displayModal={index === 0}
                ></GroupedMessage>
              ) : (
                <InfoMessage message={message} />
              )}
            </>
          );
        })}
      </div>
      {!scrollBottom && scrollToBottomButton}

      <div className="pt-1 bg-zinc-700 bottom-0 flex-none" />
      <Input
        value={value}
        setValue={setValue}
        onSend={handleSend}
        onClearHistory={() => {
          setHistory([]);
        }}
        onClearValue={() => {
          setValue("");
        }}
      />
    </div>
  );
}
