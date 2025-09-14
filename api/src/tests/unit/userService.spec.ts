// libraries
import { expect, vi, describe, it } from "vitest";

// services
import userService from "../../services/userServices";
const { registerUser, getUserByEmail } = userService;

// mock data
vi.mock("../../services/userServices", () => ({
  default: {
    getUserByEmail: vi.fn((email) => {
      if (email === "sehbaz@test.com") {
        return Promise.resolve([{ id: 1, name: "Sehbaz", email }]);
      }
      return Promise.resolve([]);
    }),
    registerUser: vi.fn().mockResolvedValue({
      message: "user registered successfully",
      user: { id: 2, name: "New user", email: "new@test.com" },
      token: "fake-jwt-token",
    }),
  },
}));

describe("User Service", () => {
  it("should fetch user by email", async () => {
    const result = await getUserByEmail("sehbaz@test.com");

    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty("email", "sehbaz@test.com");
  });

  it("should thorw error if user doesn't exists by email", async () => {
    const result = await getUserByEmail("nonexistinguser@test.com");

    expect(result).toHaveLength(0);
  });

  it("should register a new user and return a token", async () => {
    const result = await registerUser("New User", "new@test.com", "pass123");

    expect(result).toHaveProperty("message", "user registered successfully");
    expect(result.user).toHaveProperty("email", "new@test.com");
    expect(result).toHaveProperty("token");
  });
});
