import React from "react";
import { Message } from "../types";
import { getMessageStatus } from "../helpers";

type Props = { message: Message };

export default function InfoMessage({ message }: Props) {
  const color = message.type === "info" ? "yellow-300" : "red-500";
  return (
    <>
      <div
        className={`w-full h-[max-content] max-w-[700px] min-w-[720px] w-[max-content] bg-[#060521] p-3 rounded-xl border-solid border border-${color}`}
      >
        {
          <p>
            <span className={`text-${color}`}>{getMessageStatus(message)}</span>{" "}
            {message.value}
          </p>
        }
      </div>
    </>
  );
}
