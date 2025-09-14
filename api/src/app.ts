// libraries
import express from "express";

// routes
import userRoutes from "./routes/userRoutes";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

export default app;
