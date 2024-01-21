interface FlightDetail {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const defaultFlightDetails = [
  {
    id: 1,
    flightNumber: "A1B26",
    airline: "Airline 1",
    origin: "Origin 1",
    destination: "Destination 1",
    departureTime: "2024-01-20T11:56:45.227Z",
    status: "Delayed",
  },
  {
    id: 2,
    flightNumber: "A2B38",
    airline: "Airline 2",
    origin: "Origin 2",
    destination: "Destination 2",
    departureTime: "2024-01-20T12:13:25.227Z",
    status: "On Time",
  },
  {
    id: 3,
    flightNumber: "A3B78",
    airline: "Airline 3",
    origin: "Origin 3",
    destination: "Destination 3",
    departureTime: "2024-01-20T12:30:05.227Z",
    status: "Boarding",
  },
  {
    id: 4,
    flightNumber: "A4B28",
    airline: "Airline 4",
    origin: "Origin 4",
    destination: "Destination 4",
    departureTime: "2024-01-20T12:46:45.227Z",
    status: "Boarding",
  },
  {
    id: 5,
    flightNumber: "A5B60",
    airline: "Airline 5",
    origin: "Origin 5",
    destination: "Destination 5",
    departureTime: "2024-01-20T13:03:25.227Z",
    status: "Delayed",
  },
  {
    id: 6,
    flightNumber: "A6B34",
    airline: "Airline 6",
    origin: "Origin 6",
    destination: "Destination 6",
    departureTime: "2024-01-20T13:20:05.227Z",
    status: "Boarding",
  },
  {
    id: 7,
    flightNumber: "A7B20",
    airline: "Airline 7",
    origin: "Origin 7",
    destination: "Destination 7",
    departureTime: "2024-01-20T13:36:45.227Z",
    status: "Departed",
  },
  {
    id: 8,
    flightNumber: "A8B75",
    airline: "Airline 8",
    origin: "Origin 8",
    destination: "Destination 8",
    departureTime: "2024-01-20T13:53:25.227Z",
    status: "Departed",
  },
  {
    id: 9,
    flightNumber: "A9B56",
    airline: "Airline 9",
    origin: "Origin 9",
    destination: "Destination 9",
    departureTime: "2024-01-20T14:10:05.227Z",
    status: "On Time",
  },
  {
    id: 10,
    flightNumber: "A10B44",
    airline: "Airline 10",
    origin: "Origin 10",
    destination: "Destination 10",
    departureTime: "2024-01-20T14:26:45.227Z",
    status: "On Time",
  },
  {
    id: 11,
    flightNumber: "A11B94",
    airline: "Airline 11",
    origin: "Origin 11",
    destination: "Destination 11",
    departureTime: "2024-01-20T14:43:25.227Z",
    status: "Boarding",
  },
  {
    id: 12,
    flightNumber: "A12B39",
    airline: "Airline 12",
    origin: "Origin 12",
    destination: "Destination 12",
    departureTime: "2024-01-20T15:00:05.227Z",
    status: "Delayed",
  },
  {
    id: 13,
    flightNumber: "A13B59",
    airline: "Airline 13",
    origin: "Origin 13",
    destination: "Destination 13",
    departureTime: "2024-01-20T15:16:45.227Z",
    status: "On Time",
  },
  {
    id: 14,
    flightNumber: "A14B38",
    airline: "Airline 14",
    origin: "Origin 14",
    destination: "Destination 14",
    departureTime: "2024-01-20T15:33:25.227Z",
    status: "Boarding",
  },
  {
    id: 15,
    flightNumber: "A15B60",
    airline: "Airline 15",
    origin: "Origin 15",
    destination: "Destination 15",
    departureTime: "2024-01-20T15:50:05.227Z",
    status: "Delayed",
  },
];

export default FlightDetail;
export { defaultFlightDetails };
