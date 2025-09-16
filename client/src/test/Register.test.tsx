// react
import { MemoryRouter } from "react-router-dom";

// libraries
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

// pages
import Register from "../pages/Register";

// store
import store from "../store/store";

describe("Register page", () => {
  it("should render register page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

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
