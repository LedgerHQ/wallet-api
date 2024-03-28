import React, { CSSProperties } from "react";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { MessageIn, MessageOut } from "../types";

type Props = {
  message: MessageIn | MessageOut;
  style?: CSSProperties;
  theme?: Extension;
  date?: string;
};

const extensions = [langs.json()];

const Message = ({ message, theme, date }: Props) => {
  return (
    <>
      <p className="mb-2 text-sm text-slate-400">{date}</p>
      <CodeMirror
        value={JSON.stringify(message.value, null, 2)}
        extensions={extensions}
        theme={theme ?? "dark"}
        minHeight="min-content"
        maxHeight="50vh"
        style={{
          flex: 1,
        }}
        readOnly
        basicSetup={{
          foldGutter: true,
          lineNumbers: true,
          highlightActiveLineGutter: false,
          highlightActiveLine: false,
        }}
      />
    </>
  );
};

export default Message;
