import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";

describe("Login page", () => {
  it("should render login page", () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user-password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
