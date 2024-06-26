import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (client) => {
  client.on("message", (message, isBinary) => {
    //excluding the current client from the array of the connected clients
    [...wss.clients]
      .filter((c) => c !== client)
      .forEach((c) => c.send(isBinary ? message.toString() : message));
  });
});
