import { useEffect, useState } from "react";
import FlightDetail from "../utils/FlightDetail";
import APIService from "../api/APIService";
import { promiseWrapper } from "../api/helper";

const useGetFlightsListDetails = (): FlightDetail[] | null => {
  const [flightsDetails, setFlightsDetails] = useState<FlightDetail[] | null>(
    null
  );

  useEffect(() => {
    const getFlightData = async () => {
      const response = promiseWrapper(APIService.fetchFlights());
      setFlightsDetails(response);
    };

    getFlightData();

    const intervalId = setInterval(async () => {
      APIService.fetchFlights()
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
