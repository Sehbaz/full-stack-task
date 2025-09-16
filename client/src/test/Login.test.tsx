// react
import { MemoryRouter } from "react-router-dom";

// libraries
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// pages
import Login from "../pages/Login";

// store
import store from "../store/store";

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
