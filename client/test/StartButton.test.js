import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StartButton from "../src/components/StartButton";
import NameInput from "../src/components/NameInput";

test("StartButton renders and responds to click", () => {
  const onStart = jest.fn();
  render(<StartButton onStart={onStart} />);
  const btn = screen.getByLabelText("start-button");
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(onStart).toHaveBeenCalledTimes(1);
});

test("StartButton disabled when name empty", () => {
  const onStart = jest.fn();
  render(<StartButton onStart={onStart} disabled={true} />);
  const btn = screen.getByLabelText("start-button");
  expect(btn).toBeDisabled();
});

test("NameInput updates value via onChange", () => {
  const handle = jest.fn();
  render(<NameInput value="" onChange={handle} />);
  const input = screen.getByLabelText("name-input");
  fireEvent.change(input, { target: { value: "Kasutaja" } });
  expect(handle).toHaveBeenCalledWith("Kasutaja");
});
