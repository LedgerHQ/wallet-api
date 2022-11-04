import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function onConnect(ws) {
  ws.on("message", function onMessage(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
