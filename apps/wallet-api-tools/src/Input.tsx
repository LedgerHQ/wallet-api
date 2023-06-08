"use client";

import { langs } from '@uiw/codemirror-extensions-langs';
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { TemplateSelector } from "./TemplateSelector";

export type InputProps = {
  onSend: (value: string) => void;
  onClear: () => void;
};

export function Input({ onSend, onClear }: InputProps) {
  const [value, setValue] = useState("");
  const onChange = useCallback((input: string) => {
    setValue(input);
  }, []);

  const handleSend = useCallback(() => {
    setValue("");
    onSend(value);
  }, [onSend, value]);

  return (
    <>
      <CodeMirror
        value={value}
        height="200px"
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
      <div className="flex flex-row items-center py-2 px-1">
        <button
          type="button"
          className={`text-white bg-violet-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-violet-500 dark:hover:bg-violet-500 focus:outline-none dark:focus:ring-blue-800 ${
            value.length === 0 ? "cursor-not-allowed" : ""
          }`}
          onClick={handleSend}
          disabled={value.length === 0}
        >
          Send
        </button>
        <TemplateSelector
          onSelectTemplate={(newValue) => {
            setValue(JSON.stringify(newValue, null, 2));
          }}
        />
        <button
          onClick={onClear}
          aria-label="Clear history"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Clear
        </button>
      </div>
    </>
  );
}
