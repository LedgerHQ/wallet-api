"use client";

import { Transport, WindowMessageTransport } from "@ledgerhq/wallet-api-core";
import {
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Input } from "./Input";
import { MessageGrouped, Message } from "./types";
import GroupedMessage from "./components/GroupedMessage";
import InfoMessage from "./components/InfoMessage";

const schemaRequest = z.object({
  method: z.string(),
  params: z.object({}).passthrough(),
});

export function Editor() {
  const [history, setHistory] = useState<(Message | MessageGrouped)[]>([]);

  const searchParams = useSearchParams();
  const panelRef = useRef<HTMLDivElement>(null);
  const transportRef = useRef<Transport | null>(null);
  const [value, setValue] = useState("");

  const isSimulator = searchParams.get("simulator");

  const pushMessage = useCallback(
    (type: Message["type"], value: Message["value"]) => {
      if (type === "error" || type === "info") {
        setHistory((prev) => [...prev, { date: new Date(), type, value }]);
      } else if (type === "out") {
        const parsedValue = JSON.parse(value) as {
          id: string;
        };
        setHistory((prev) => [
          ...prev,
          {
            type: "group",
            id: parsedValue.id,
            messages: {
              sent: { date: new Date(), type, value },
              received: undefined,
            },
          },
        ]);
      } else {
        const parsedValue = JSON.parse(value) as {
          id: string;
        };
        setHistory((prev) => {
          const updatedHistory = prev.map((item) => {
            // Ensure the item is of type MessageGrouped before checking its ID
            if (item.type === "group" && item.id === parsedValue.id) {
              // Create a new object instead of mutating the existing one
              return {
                ...item,
                messages: {
                  ...item.messages,
                  received: { date: new Date(), type, value },
                },
              };
            }
            return item;
          });

          return updatedHistory;
        });
      }
    },
    [],
  );

  const handleMessage = useCallback(
    (message: string) => {
      const prettifiedJson = JSON.stringify(JSON.parse(message), null, 2);
      pushMessage("in", prettifiedJson);
    },
    [pushMessage],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (panelRef.current !== null) {
        panelRef.current.scrollTop = panelRef.current.scrollHeight;
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [history]);

  useEffect(() => {
    pushMessage(
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
  }, [handleMessage, isSimulator, pushMessage]);

  const handleClear = useCallback(() => {
    setHistory([]);
  }, []);

  const handleSend = useCallback(
    (input: string) => {
      const requestId = uuidv4();

      const transport = transportRef.current;

      try {
        if (!transport) {
          throw new Error("No transport initialized");
        }

        const parsedRequest = schemaRequest.parse(JSON.parse(input));

        const request = {
          id: requestId,
          jsonrpc: "2.0",
          ...parsedRequest,
        };

        const message = JSON.stringify(request, null, 2);
        pushMessage("out", message);

        transport.send(message);
      } catch (error) {
        setHistory((prev) => [
          ...prev,
          {
            date: new Date(),
            type: "error",
            value: String(error),
          },
        ]);
      }
    },
    [setHistory, pushMessage],
  );

  return (
    <div className="flex flex-col h-full">
      <div
        ref={panelRef}
        className="flex-1 flex flex-col overflow-y-auto p-6 pb-6 gap-y-6"
      >
        {history.map((message, index) => {
          return (
            <>
              {index !== 0 && (
                <div className="w-full border-b border-[#666]"></div>
              )}

              {message.type === "group" ? (
                <GroupedMessage
                  group={message.messages}
                  setValue={setValue}
                  displayModal={index === history.length - 1}
                ></GroupedMessage>
              ) : (
                <InfoMessage message={message} />
              )}
            </>
          );
        })}
      </div>

      <div className="pt-1 bg-zinc-700 bottom-0 flex-none" />

      <Input
        value={value}
        setValue={setValue}
        onSend={handleSend}
        onClear={handleClear}
      />
    </div>
  );
}
