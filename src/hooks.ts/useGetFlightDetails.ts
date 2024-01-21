import { useEffect, useState } from "react";
import FlightDetail from "../utils/FlightDetail";
import APIService from "../api/APIService";
import { promiseWrapper } from "../api/helper";

const useGetFlightDetails = (id: string): FlightDetail | null => {
  const [flightDetails, setFlightDetails] = useState<FlightDetail | null>(null);

  useEffect(() => {
    const getFlightData = async () => {
      const response = promiseWrapper(APIService.fetchFlightDetails(id));
      setFlightDetails(response);
    };

    getFlightData();
  }, [id]);

  return flightDetails;
};

export default useGetFlightDetails;
