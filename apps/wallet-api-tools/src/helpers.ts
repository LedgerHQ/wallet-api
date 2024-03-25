import { MessageIn, MessageInfo, MessageOut } from "./types";

export function getMessageStatus(
  message: MessageInfo | MessageIn | MessageOut,
) {
  switch (message.type) {
    case "in":
      return "Received on";
    case "out":
      return "Sent on ";
    case "error":
      return "[error]";
    case "info":
      return "[info]";
    default: {
      return undefined;
    }
  }
}

export function getDate(message: MessageInfo | MessageIn | MessageOut) {
  try {
    return (
      getMessageStatus(message) +
      " " +
      new Date(message.date).toDateString() +
      " at " +
      new Date(message.date).toLocaleTimeString()
    );
  } catch (e) {
    console.error("message", { message, e });
    return "Error: Failed to generate the date.";
  }
}
