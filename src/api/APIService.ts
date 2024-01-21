import FlightDetail from "../utils/FlightDetail";
import service from "./axios";

class APIService {
  static async fetchFlights(): Promise<FlightDetail[]> {
    return (await service.get("/flights")).data;
  }

  static async fetchFlightDetails(
    id: string
  ): Promise<FlightDetail> {
    return (await service.get(`/flights/${id}`)).data;
  }
}

export default APIService;
