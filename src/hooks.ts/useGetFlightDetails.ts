import { useEffect, useState } from "react";
import FlightDetail from "../utils/FlightDetail";
import APIService from "../api/APIService";
import { promiseWrapper } from "../api/helper";
import axiosInstance from "../api/axios";

const useGetFlightDetails = (id: string): FlightDetail | null => {
  const apiService = new APIService(axiosInstance);
  const [flightDetails, setFlightDetails] = useState<FlightDetail | null>(null);

  useEffect(() => {
    const getFlightData = async () => {
      const response = promiseWrapper(apiService.fetchFlightDetails(id));
      setFlightDetails(response);
    };

    getFlightData();
  }, [id]);

  return flightDetails;
};

export default useGetFlightDetails;
