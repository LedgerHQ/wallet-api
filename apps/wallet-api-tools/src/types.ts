export type Message = {
  type: "in" | "out" | "info" | "error";
  value: string;
  date: Date;
};

export type MessageGrouped = {
  type: "group";
  id: string;
  messages: {
    sent: Message;
    received: Message | undefined;
  };
};
