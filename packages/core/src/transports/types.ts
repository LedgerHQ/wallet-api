/**
 * Simple contract for handling a Message received through a [[Transport]] protocol
 *
 * @alpha
 */
export type MessageHandler = (message: string) => void;

/**
 * A transport protocol used to communicate with the Ledger Live platform
 *
 * @alpha
 */
export type Transport = {
  /**
   * A function to handle new messages coming from the Ledger Live platform
   */
  onMessage: MessageHandler | undefined;
  /**
   * A function to send new messages to the Ledger Live platform
   */
  send(message: string): void;
};
