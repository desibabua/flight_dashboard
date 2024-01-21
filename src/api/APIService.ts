import { AxiosInstance } from "axios";
import FlightDetail from "../utils/FlightDetail";
import service from "./axios";

class APIService {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  async fetchFlights(): Promise<FlightDetail[]> {
    return (await service.get("/flights")).data;
  }

  async fetchFlightDetails(id: string): Promise<FlightDetail> {
    return (await service.get(`/flights/${id}`)).data;
  }
}

export default APIService;
