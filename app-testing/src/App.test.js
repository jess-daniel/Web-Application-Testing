import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("it displays strikes", () => {
  const { getByText } = render(<App />);
  getByText(/strikes/i);
});

test("it has a hit button", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

test("it has a foul button", () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});
