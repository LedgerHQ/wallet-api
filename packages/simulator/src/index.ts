import { WindowMessageTransport } from "@ledgerhq/wallet-api-core";
import Server from "@ledgerhq/wallet-api-server";

const transport = new WindowMessageTransport(window);

const server = new Server(transport);

server.connect();

server.addMethod("account.list", () => {});
