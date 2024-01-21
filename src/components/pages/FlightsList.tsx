import React, { Suspense } from "react";
import ErrorBoundary from "../common/ErrorBoundary";
import ErrorCard from "../common/ErrorCard";
import LoaderAnimation from "../common/LoaderAnimation";
import FlightsListTable from "../flightList/FlightListTable";

const FlightsList: React.FC = () => {

  const title = "Uh-oh! Unable to Retrieve Flights Information";
  const description =
    "We're sorry, Something went wrong while fetching flights details. Please retry after some time";

  return (
    <ErrorBoundary
      fallback={<ErrorCard title={title} description={description} />}
    >
      <Suspense fallback={<LoaderAnimation />}>
        <FlightsListTable />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FlightsList;
