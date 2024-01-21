import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../common/ErrorBoundary";
import ErrorCard from "../common/ErrorCard";
import LoaderAnimation from "../common/LoaderAnimation";
import FlightDetailsCard from "../flightDetails/FlightDetailsCard";

const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const title = "Uh-oh! Unable to Retrieve Flight Information";
  const description =
    "We're sorry, Something went wrong while fetching flight details. Please retry after some time or or return back to homepage.";
  const action = "Back to Home";

  if (!id) {
    return (
      <ErrorCard
        title={title}
        description={description}
        actionName={action}
        navigateOnActionTo={"/"}
      />
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <ErrorCard
          title={title}
          description={description}
          actionName={action}
          navigateOnActionTo={"/"}
        />
      }
    >
      <Suspense fallback={<LoaderAnimation />}>
        <FlightDetailsCard id={id} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default FlightDetails;
