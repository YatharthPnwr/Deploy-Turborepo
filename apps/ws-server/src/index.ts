import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 }, () => {
  console.log("WS server listening at port 8080");
});

wss.on("connection", (ws) => {
  ws.on("message", async (msg) => {
    const data = JSON.parse(msg.toString());
    const name = data.username;
    const password = data.password;

    const dbRes = await client.user.create({
      data: {
        username: name,
        password: password,
      },
    });

    ws.send(
      JSON.stringify({
        res: dbRes,
      })
    );
  });
});
