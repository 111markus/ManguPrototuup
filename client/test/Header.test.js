import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

test("Header renders title", () => {
  render(<Header />);
  expect(screen.getByText(/AIM/i)).toBeInTheDocument();
  expect(screen.getByText(/TRAINER/i)).toBeInTheDocument();
});
