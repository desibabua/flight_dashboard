import { useEffect, useState } from "react";
import FlightDetail from "../utils/FlightDetail";
import APIService from "../api/APIService";
import { promiseWrapper } from "../api/helper";
import axiosInstance from "../api/axios";

const useGetFlightsListDetails = (): FlightDetail[] | null => {
  const apiService = new APIService(axiosInstance);
  const [flightsDetails, setFlightsDetails] = useState<FlightDetail[] | null>(
    null
  );

  useEffect(() => {
    const getFlightData = async () => {
      const response = promiseWrapper(apiService.fetchFlights());
      setFlightsDetails(response);
    };

    
    getFlightData();
    
    const intervalId = setInterval(async () => {
      apiService.fetchFlights()
        .then((response) => {
          setFlightsDetails(response);
        })
        .catch((reason) => {
          setFlightsDetails((prev) => prev);
        });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return flightsDetails;
};

export default useGetFlightsListDetails;
