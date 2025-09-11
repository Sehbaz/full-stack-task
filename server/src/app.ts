const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

export default app;
