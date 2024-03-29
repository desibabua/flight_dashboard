import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("should render app bar title", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const appBarTitleText = screen.getByText(/FlightFolio/i);
  expect(appBarTitleText).toBeInTheDocument();
});
