import React from "react";
import { getDate } from "../helpers";
import { MessageInfo } from "../types";

export default function InfoMessage({ message }: { message: MessageInfo }) {
  const color = message.type === "info" ? "yellow-300" : "red-500";
  return (
    <>
      <div
        className={`w-full h-[max-content] w-[max-content] bg-[#060521] p-3 rounded-xl border-solid border border-${color}`}
      >
        {
          <>
            <p>{message.value}</p>
            <p className="text-slate-400 text-xs">{getDate(message)}</p>
          </>
        }
      </div>
    </>
  );
}
