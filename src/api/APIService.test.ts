import APIService from "./APIService";
import instance from "./axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(instance, { delayResponse: 100 });

describe("API Service", () => {
  it("should fetch flights status details", async () => {
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

    const res = await new APIService(instance).fetchFlights();

    expect(res).toEqual(flightsDetails);
  });
});
