import path from "path";
import request from "supertest";
import { sql } from "drizzle-orm";
import { describe, it, beforeAll, afterAll, expect } from "vitest";
import { migrate } from "drizzle-orm/node-postgres/migrator";

// setup
import app from "../../app";
import { db } from "../../db/index";

describe("User Registration", () => {
  // hooks
  beforeAll(async () => {
    await migrate(db, {
      migrationsFolder: path.join(__dirname, "../../db/drizzle"),
    });
    await db.execute(sql`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`);
  });

  afterAll(async () => {
    await db.execute(sql`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`);
  });

  it("should create a user successfully", async () => {
    const payload = {
      name: "Sehbaz",
      email: "sehbaz@test.com",
      password: "123",
    };
    const res = await request(app).post("/user/register").send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("id", 1);
    expect(res.body.user).toHaveProperty("email", "sehbaz@test.com");
  });

  it("should not create user if user exists", async () => {
    const payload = {
      name: "Sehbaz",
      email: "sehbaz@test.com",
      password: "123",
    };
    const res = await request(app).post("/user/register").send(payload);

    expect(res.status).toBe(409);
  });

  it("should not create user for missing payload", async () => {
    const payload = {
      name: "Sehbaz",
      password: "123",
    };
    const res = await request(app).post("/user/register").send(payload);

    expect(res.status).toBe(400);
  });
});
