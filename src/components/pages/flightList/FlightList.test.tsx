import React from "react";
import { render, screen } from "@testing-library/react";
import FlightsList from "./FlightList";
import FlightDetail from "./FlightDetails";

describe("should render Flight List page", () => {
  test("should render flight when flight details are available", () => {
    const flightDetails: FlightDetail[] = [
      {
        id: 1,
        flightNumber: "A1B26",
        airline: "Airline For Test",
        origin: "Origin 1",
        destination: "Destination 1",
        departureTime: "2024-01-20T11:56:45.227Z",
        status: "Delayed",
      },
    ];
    render(<FlightsList flights={flightDetails} />);
    const appBarTitleText = screen.getByText(/Airline For Test/i);
    expect(appBarTitleText).toBeInTheDocument();
  });
});
