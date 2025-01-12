import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", function() {
  render(<Counter />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

it("handles button clicks", function() {
  const { getByText } = render(<Counter />);
  const h1 = getByText(`Let's count!`);

  console.log(h1)
});
