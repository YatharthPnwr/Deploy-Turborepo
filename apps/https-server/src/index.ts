import express, { Request, Response } from "express";
const app = express();
import { client } from "@repo/db/client";

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send(
    JSON.stringify({
      res: "Hello user",
    })
  );
});

app.post("/signup", async (req, res) => {
  const dbRes = await client.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  res.send({
    res: dbRes,
  });
});

app.listen(
  {
    port: 3000,
  },
  () => {
    console.log("Successfully listening at port 3000");
  }
);
