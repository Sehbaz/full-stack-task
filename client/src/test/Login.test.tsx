import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router-dom";

describe("Login page", () => {
  it("should render login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getAllByLabelText(/email/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/user-password/i)[0]).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
