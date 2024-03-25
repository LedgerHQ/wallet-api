import React, { useState } from "react";
import { MessageGrouped, MessageOut } from "../types";
import { getDate } from "../helpers";
import { coolGlow, dracula } from "thememirror";
import Message from "./Message";

type Props = {
  group: MessageGrouped["messages"];
  setValue: (value: string) => void;
  handleReUse: (request: MessageOut) => void;
  displayModal?: boolean;
};

const GroupedMessage = ({ group, handleReUse, displayModal }: Props) => {
  const [displayResponse, setDisplayResponse] = useState(displayModal ?? false);

  return (
    <div className="w-full  h-[max-content] rounded-md">
      <div className="text-lg">
        <p>Method : {group.sent.value.method}</p>
      </div>
      <p className="text-slate-400 text-xs mb-2">{getDate(group.sent)}</p>
      <div className=" max-w-full">
        <div
          className={`max-w-full h-[max-content] bg-[#060521] p-4 pr-12 rounded-xl border-solid border-[1px] border-[#666]`}
        >
          <div className="flex gap-x-2">
            <button
              onClick={() => {
                handleReUse(group.sent);
              }}
              aria-label="Clear history"
              className="py-1 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            >
              Re-use
            </button>
            <button
              onClick={() => {
                setDisplayResponse((prev) => !prev);
              }}
              aria-label="Clear history"
              className=" py-1 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            >
              {displayResponse ? "Hide" : "Show"} response
            </button>
          </div>
          <Message theme={coolGlow} message={group.sent}></Message>
        </div>

        {displayResponse && (
          <div className="px-4">
            <div
              className={`w-full max-w-full  h-[max-content] bg-[#2d2f3f] p-4 rounded-b-xl mx-auto `}
            >
              <div className="text-lg">
                <p>Response</p>
              </div>
              {group.received ? (
                <Message
                  message={group.received}
                  theme={dracula}
                  date={getDate(group.received)}
                  style={{ maxHeight: "50vh" }}
                ></Message>
              ) : (
                "..."
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupedMessage;
