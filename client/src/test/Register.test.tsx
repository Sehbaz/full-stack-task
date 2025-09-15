// libraries
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// pages
import Register from "../pages/Register";

describe("Register page", () => {
  it("should render register page", () => {
    render(<Register />);

    expect(screen.getAllByLabelText(/name/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/email/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/user-password/i)[0]).toBeInTheDocument();
    expect(
      screen.getAllByLabelText(/user-confirm-password/i)[0]
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });
});
