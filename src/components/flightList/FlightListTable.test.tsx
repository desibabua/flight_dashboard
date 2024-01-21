import { render, screen } from "@testing-library/react";

import MockAdapter from "axios-mock-adapter";
import { MemoryRouter } from "react-router-dom";
import apiInstance from "../../api/axios";
import FlightsListTable from "./FlightListTable";

const mock = new MockAdapter(apiInstance);

describe("Flights List Details", () => {
  it("should show flights status details", async () => {
    const flightsDetails = [
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

    mock.onGet("/flights").reply(200, flightsDetails);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <FlightsListTable />
      </MemoryRouter>
    );

    const element = await screen.findByText(/Airline For Test/i);
    expect(element).toBeInTheDocument();
  });
});
