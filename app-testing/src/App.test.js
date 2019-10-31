import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

it("it displays strikes", () => {
  const { getByText } = render(<App />);
  getByText(/strikes/i);
});

it("it has a hit button", () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});

it("it has a foul button", () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});
