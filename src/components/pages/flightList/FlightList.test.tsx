import { render, screen } from "@testing-library/react";
import FlightDetail from "./FlightDetail";
import FlightsList from "./FlightList";
import { BrowserRouter as Router } from "react-router-dom";

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
    render(
      <Router>
        <FlightsList flights={flightDetails} />
      </Router>
    );
    const appBarTitleText = screen.getByText(/Airline For Test/i);
    expect(appBarTitleText).toBeInTheDocument();
  });
});
