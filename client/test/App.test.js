import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("App renders header, input, start button and gallery toggle", () => {
  render(<App />);
  expect(screen.getByText(/AIM/i)).toBeInTheDocument();
  expect(screen.getByLabelText("name-input")).toBeInTheDocument();
  expect(screen.getByLabelText("start-button")).toBeDisabled();
  expect(screen.getByLabelText("dev-toggle")).toBeInTheDocument();
});
