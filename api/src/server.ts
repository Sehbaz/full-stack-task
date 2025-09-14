import app from "./app";

import { pool } from "./db/index";

const PORT = 3000;

const startServer = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("==> Database connected successfully");

    app.listen(PORT, () => {
      console.log(`==> Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("==> Database connection failed & api not started:", err);
    process.exit(1);
  }
};

startServer();
