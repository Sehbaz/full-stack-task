import { expect, test } from "vitest";
import request from "supertest";
import app from "../app";

test("should register a user with valid data", async () => {
  const payload = {
    name: "Sehbaz",
    email: "sehbaz@test.com",
    password: "pass123",
    confirmPassword: "pass123",
  };

  const resposnse = await request(app).post("/user/register").send(payload);

  expect(resposnse.body).toBe(201);
  expect(resposnse.body).toHaveProperty(
    "message",
    "User registered successfully"
  );
});
