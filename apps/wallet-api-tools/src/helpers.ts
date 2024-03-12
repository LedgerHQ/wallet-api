import { Message } from "./types";

export function getMessageStatus(message: Message) {
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
      const exhaustiveCheck: never = message.type; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      return exhaustiveCheck;
    }
  }
}

export function getDate(message: Message) {
  try {
    return (
      getMessageStatus(message) +
      " " +
      new Date(message.date).toDateString() +
      " at " +
      new Date(message.date).toLocaleTimeString()
    );
  } catch (e) {
    console.log("message", { message, e });
    return "Error: Failed to generate the date.";
  }
}
