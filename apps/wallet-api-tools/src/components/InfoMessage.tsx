import React from "react";
import { getDate } from "../helpers";
import { MessageInfo } from "../types";

const InfoMessage = function InfoMessage({
  message,
}: {
  message: MessageInfo;
}) {
  const color = message.type === "info" ? "yellow-300" : "red-500";
  return (
    <>
      <div
        className={`h-[max-content] w-[max-content] w-full rounded-xl border border-solid bg-[#060521] p-3 border-${color}`}
      >
        <p>{message.value}</p>
        <p className="text-xs text-slate-400">{getDate(message)}</p>
      </div>
    </>
  );
};

export default InfoMessage;
