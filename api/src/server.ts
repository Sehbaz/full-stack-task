import app from "./app";

// const
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`==> Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("==> Server failed to start:", err);
    process.exit(1);
  }
};

startServer();
