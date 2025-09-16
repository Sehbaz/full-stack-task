import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const DATABASE_TEST_URL =
  "postgres://postgres:postgres@localhost:25432/postgres_test";

export default defineConfig({
  out: "./src/db/drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_TEST_URL,
  },
});
