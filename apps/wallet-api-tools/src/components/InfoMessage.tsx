import React from "react";
import { Message } from "../types";
import { getDate } from "../helpers";

type Props = { message: Message };

export default function InfoMessage({ message }: Props) {
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