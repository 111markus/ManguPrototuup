import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DevGallery from "../src/components/DevGallery";

test("DevGallery toggles gallery visibility", () => {
  render(<DevGallery />);
  const toggle = screen.getByLabelText("dev-toggle");
  expect(toggle).toBeInTheDocument();
  // initially no gallery
  expect(screen.queryByTestId("gallery")).toBeNull();
  fireEvent.click(toggle);
  expect(screen.getByTestId("gallery")).toBeInTheDocument();
  fireEvent.click(toggle);
  expect(screen.queryByTestId("gallery")).toBeNull();
});

test("DevGallery shows correct image src when visible", () => {
  render(<DevGallery src={"pildid/pilt.png"} />);
  const toggle = screen.getByLabelText("dev-toggle");
  fireEvent.click(toggle);
  const img = screen.getByAltText("Arenduse pilt");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "pildid/pilt.png");
});
