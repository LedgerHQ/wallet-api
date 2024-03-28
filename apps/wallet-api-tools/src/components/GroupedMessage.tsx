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

const GroupedMessage = function GroupedMessage({
  group,
  handleReUse,
  displayModal,
}: Props) {
  const [displayResponse, setDisplayResponse] = useState(displayModal ?? false);

  return (
    <div className="h-[max-content] w-full rounded-md">
      <div className="text-lg">
        <p>Method : {group.sent.value.method}</p>
      </div>
      <p className="mb-2 text-xs text-slate-400">{getDate(group.sent)}</p>
      <div className=" max-w-full">
        <div
          className={`h-[max-content] max-w-full rounded-xl border-[1px] border-solid border-[#666] bg-[#060521] p-4 pr-12`}
        >
          <div className="flex gap-x-2">
            <button
              onClick={() => {
                handleReUse(group.sent);
              }}
              aria-label="Clear history"
              className="rounded-md border border-gray-200 bg-white px-5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none  focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 "
            >
              Re-use
            </button>
            <button
              onClick={() => {
                setDisplayResponse((prev) => !prev);
              }}
              aria-label="Clear  history"
              className=" rounded-md border border-gray-200 bg-white px-5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none  focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 "
            >
              {displayResponse ? "Hide" : "Show"} response
            </button>
          </div>
          <Message theme={coolGlow} message={group.sent}></Message>
        </div>

        {displayResponse && (
          <div className="px-4">
            <div
              className={`mx-auto h-[max-content]  w-full max-w-full rounded-b-xl bg-[#2d2f3f] p-4 `}
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
                <div className="h-[25vh]  animate-pulse py-5">
                  <div className="h-full w-full  rounded-xl bg-[#060521]"></div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupedMessage;
