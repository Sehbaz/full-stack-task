// libraries
import path from "path";
import request from "supertest";
import { sql } from "drizzle-orm";
import { describe, it, beforeAll, afterAll, expect, beforeEach } from "vitest";
import { migrate } from "drizzle-orm/node-postgres/migrator";

// setup
import app from "../../app";
import { db } from "../../db/index";

// models
import { User } from "../../models/user";

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

  it("returns 200 OK when create a user successfully", async () => {
    const payload: User = {
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

  it("returns 409 OK if user exists", async () => {
    const payload: User = {
      name: "Sehbaz",
      email: "sehbaz@test.com",
      password: "123",
    };
    const res = await request(app).post("/user/register").send(payload);

    expect(res.status).toBe(409);
    expect(res.body).toHaveProperty("error", "user already exists");
  });

  it("returns 400 OK for missing payload", async () => {
    const payload = {
      name: "Sehbaz",
      password: "123",
    };
    const res = await request(app).post("/user/register").send(payload);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error", "missing required fields");
  });
});

describe("User Login", () => {
  const userPayload: User = {
    name: "Sehbaz",
    email: "sehbaz@test.com",
    password: "123",
  };

  beforeEach(async () => {
    await request(app).post("/user/register").send(userPayload);
  });

  it("returns 200 OK when credentials are valid", async () => {
    const loginPayload = {
      email: userPayload.email,
      password: userPayload.password,
    };

    const res = await request(app).post("/user/login").send(loginPayload);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "login successful");
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("token");
  });

  it("returns 401 Unauthorized when credentials are invalid", async () => {
    const invalidLoginPayload = {
      email: userPayload.email,
      password: "wrong-password",
    };

    const res = await request(app)
      .post("/user/login")
      .send(invalidLoginPayload);

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("error", "invalid email or password");
  });
});
