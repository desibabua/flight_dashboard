import { render, screen } from "@testing-library/react";

import FlightDetailsCard from "./FlightDetailsCard";
import MockAdapter from "axios-mock-adapter";
import apiInstance from "../../api/axios";
import { MemoryRouter } from "react-router-dom";

const mock = new MockAdapter(apiInstance);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "2",
  }),
}));

describe("Flight Details", () => {
  it("render flight details card by default", async () => {
    const dummyFlight = {
      id: 1,
      flightNumber: "A1B26",
      airline: "Airline For Test",
      origin: "Origin 1",
      destination: "Destination 1",
      departureTime: "2024-01-20T11:56:45.227Z",
      status: "Delayed",
    };

    mock.onGet("/flights/2").reply(200, dummyFlight);

    render(
      <MemoryRouter initialEntries={["/flight/2"]}>
        <FlightDetailsCard id={"2"} />
      </MemoryRouter>
    );
    const element = await screen.findByText(/Origin 1/i);
    expect(element).toBeInTheDocument();
  });
});
