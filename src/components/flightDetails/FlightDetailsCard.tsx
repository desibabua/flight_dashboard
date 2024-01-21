import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import useGetFlightDetails from "../../hooks.ts/useGetFlightDetails";
import { formatDate, formatTime } from "../../utils/dateUtils";
import FlightStatus from "../flightStatus/FlightStatus";
import "./FlightDetailsCard.css";
import LoaderAnimation from "../common/LoaderAnimation";

const FlightDetailsCard: React.FC<{ id: string }> = ({ id }) => {
  const flightDetails = useGetFlightDetails(id);
  if (!flightDetails) {
    return <LoaderAnimation />;
  }

  return (
    <Container className="flight-status-detials">
      <Container className="flight-status-title">
        <FlightStatus status={flightDetails.status} />
      </Container>
      <Card className="flight-details-card">
        <CardContent>
          <div className="flight-details-header">
            <Typography color="textSecondary">
              {flightDetails.airline}
            </Typography>
            <Typography sx={{ fontSize: "32px", fontWeight: "500" }}>
              {flightDetails.flightNumber}
            </Typography>
          </div>
          <Container className="flight-details-status">
            <Typography>{flightDetails.origin}</Typography>
            <Divider className="flight-icon">
              <FlightTakeoffIcon fontSize={"large"} />
            </Divider>
            <Typography>{flightDetails.destination}</Typography>
          </Container>
          <Typography component="div">
            {formatDate(flightDetails.departureTime)}
          </Typography>
          <Typography variant="h4" component="div">
            {formatTime(flightDetails.departureTime)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FlightDetailsCard;
