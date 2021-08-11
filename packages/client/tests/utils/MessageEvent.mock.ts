type MessageEventInit = {
  data?: string;
  origin?: string;
};

export default class MessageEventMock {
  private type: string;

  private data: string | undefined;

  private origin: string | undefined;

  constructor(type: string, { data, origin }: MessageEventInit) {
    this.type = type;
    this.data = data;
    this.origin = origin;
  }
}
