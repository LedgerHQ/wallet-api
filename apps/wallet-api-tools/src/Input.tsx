"use client";

import { langs } from "@uiw/codemirror-extensions-langs";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";
import { CommandSelector } from "./CommandSelector";

export type InputProps = {
  value: string;
  setValue: (value: string) => void;
  onSend: (value: string) => void;
  onClearHistory: () => void;
  onClearValue: () => void;
};

export function Input({
  value,
  setValue,
  onSend,
  onClearHistory,
  onClearValue,
}: InputProps) {
  const onChange = useCallback((input: string) => {
    setValue(input);
  }, []);

  const handleSend = useCallback(() => {
    setValue("");
    onSend(value);
  }, [onSend, setValue, value]);

  return (
    <>
      <CodeMirror
        value={value}
        height="150px"
        extensions={[langs.json()]}
        onChange={onChange}
        theme="dark"
        autoFocus
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLineGutter: false,
          highlightActiveLine: false,
        }}
      />
      <div className="flex flex-row items-center gap-x-2 px-1 py-2">
        <button
          type="button"
          className={`rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-violet-500 dark:hover:bg-violet-500 dark:focus:ring-blue-800 ${
            value.length === 0 ? "cursor-not-allowed" : ""
          }`}
          onClick={handleSend}
          disabled={value.length === 0}
        >
          Send
        </button>
        <CommandSelector
          onSelectCommand={(newValue) => {
            setValue(JSON.stringify(newValue, null, 2));
          }}
        />
        <button
          onClick={onClearValue}
          aria-label="Clear value"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Clear input
        </button>
        <button
          onClick={onClearHistory}
          aria-label="Clear history"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Clear History
        </button>
      </div>
    </>
  );
}
