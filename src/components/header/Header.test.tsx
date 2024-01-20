import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should render app bar title", () => {
  render(<Header />);
  const appBarTitleText = screen.getByText(/Arrivals/i);
  expect(appBarTitleText).toBeInTheDocument();
});
