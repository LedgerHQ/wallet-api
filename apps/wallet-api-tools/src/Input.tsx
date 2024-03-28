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
      <div className="flex flex-row items-center py-2 px-1 gap-x-2">
        <button
          type="button"
          className={`text-white bg-violet-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-violet-500 dark:hover:bg-violet-500 focus:outline-none dark:focus:ring-blue-800 ${
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
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Clear input box
        </button>
        <button
          onClick={onClearHistory}
          aria-label="Clear history"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Clear History
        </button>
      </div>
    </>
  );
}
