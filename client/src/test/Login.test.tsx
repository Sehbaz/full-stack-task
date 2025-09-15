import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";

describe("Login page", () => {
  it("should render login page", () => {
    render(<Login />);
    expect(screen.getAllByLabelText(/email/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/user-password/i)[0]).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
