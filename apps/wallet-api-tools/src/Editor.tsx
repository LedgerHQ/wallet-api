"use client";

import { json } from "@codemirror/lang-json";
import { Transport, WindowMessageTransport } from "@ledgerhq/wallet-api-core";
import {
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { Input } from "./Input";

const schemaRequest = z.object({
  method: z.string(),
  params: z.object({}).passthrough(),
});

type Message = {
  type: "in" | "out" | "info" | "error";
  value: string;
  date: Date;
};

function getMessageStatus(message: Message) {
  switch (message.type) {
    case "in":
      return "<- [received]";
    case "out":
      return "-> [sent]";
    case "error":
      return "[error]";
    case "info":
      return "[info]";
    default: {
      const exhaustiveCheck: never = message.type; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
    }
  }
}

export function Editor() {
  const [history, setHistory] = useState<Message[]>([]);
  const searchParams = useSearchParams();
  const codeMirrorRef = useRef<ReactCodeMirrorRef | null>(null);
  const transportRef = useRef<Transport | null>(null);

  const isSimulator = searchParams.get("simulator");

  const pushMessage = useCallback(
    (type: Message["type"], value: Message["value"]) => {
      setHistory((prev) => [...prev, { date: new Date(), type, value }]);
    },
    []
  );

  const value = useMemo(() => history
      .map(
        (message) =>
          `${getMessageStatus(message)} ${message.date.toLocaleTimeString()}\n${
            message.value
          }`
      )
      .join("\n\n\n"), [history]);

  const handleMessage = useCallback(
    (message: string) => {
      const prettifiedJson = JSON.stringify(JSON.parse(message), null, 2);
      pushMessage("in", prettifiedJson);
    },
    [pushMessage]
  );

  useEffect(() => {
    const codeMirror = codeMirrorRef.current;

    if (codeMirror && codeMirror.editor) {
      codeMirror.editor.scrollTop = codeMirror.editor.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    pushMessage(
      "info",
      `Connected to ${isSimulator ? "simulator" : "software"} wallet`
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
    [setHistory, pushMessage]
  );

  return (
    <>
      <CodeMirror
        ref={codeMirrorRef}
        value={value}
        extensions={[json()]}
        theme={"dark"}
        minHeight="100%"
        style={{
          flex: 1,
          overflow: "scroll",
        }}
        readOnly
        basicSetup={{
          lineNumbers: false,
          highlightActiveLineGutter: false,
          highlightActiveLine: false,
          foldGutter: false,
        }}
      />
      <div className="pt-1 bg-zinc-700" />
      <Input onSend={handleSend} onClear={handleClear} />
    </>
  );
}
