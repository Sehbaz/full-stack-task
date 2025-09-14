import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Register from "../pages/Register";

describe("Register page", () => {
  it("should render register page", () => {
    render(<Register />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user-password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/user-confirm-password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });
});
