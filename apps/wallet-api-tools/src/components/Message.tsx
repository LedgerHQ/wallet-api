import React, { CSSProperties, Suspense } from "react";
import { Message } from "../types";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

type Props = {
  message: Message;
  style?: CSSProperties;
  theme?: Extension;
  date?: string;
};

const Message = ({ message, style, theme, date }: Props) => {
  return (
    <>
      <p className="text-slate-400 text-sm mb-2">{date}</p>
      <Suspense fallback={"..."}>
        <CodeMirror
          value={`${message.value}`}
          extensions={[langs.json()]}
          theme={theme ?? "dark"}
          minHeight="min-content"
          style={{
            flex: 1,
            overflow: "scroll",
            ...style,
          }}
          readOnly
          basicSetup={{
            foldGutter: true,
            lineNumbers: true,
            highlightActiveLineGutter: false,
            highlightActiveLine: false,
          }}
        />
      </Suspense>
    </>
  );
};

export default Message;
