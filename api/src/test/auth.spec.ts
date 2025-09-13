import { expect, test, vi, beforeEach, describe, it } from "vitest";
import request from "supertest";
import app from "../app";

import * as userService from "../services/userServices";

beforeEach(() => {
  vi.spyOn(userService, "default").mockResolvedValue({
    message: "User registered successfully",
    user: { id: 1, name: "Sehbaz", email: "sehbaz@test.com" },
    token: "fake-jwt-token",
  });
});

describe("User registration", () => {
  it("should register a user with valid data", async () => {
    const payload = {
      name: "Sehbaz",
      email: "sehbaz@test.com",
      password: "pass123",
    };

    const response = await request(app).post("/user/register").send(payload);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty(
      "message",
      "User registered successfully"
    );
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("id");
    expect(response.body.user).toHaveProperty("name", "Sehbaz");
    expect(response.body).toHaveProperty("token");
  });

  it("should not register a user with invalid data", async () => {
    const payload = {
      name: "Sehbaz",
      password: "pass123",
    };

    const response = await request(app).post("/user/register").send(payload);

    expect(response.status).toBe(400);
  });
});
