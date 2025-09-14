// const express = require("express");
import express, { Request, Response } from "express";

import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

export default app;
