import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FlightDetail, { defaultFlightDetails } from "../flightList/FlightDetail";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import "./FlightDetail.css";
import { Container } from "@mui/material";
import { formatDate, formatTime } from "../../../utils/dateUtils";
import { useParams } from "react-router-dom";
import FlightStatus from "../../flightStatus/FlightStatus";

const FlightDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const flight: FlightDetail | undefined = defaultFlightDetails.find(
    (f) => f.id.toString() === id
  );

  if (!flight) {
    return <div>Flight not found</div>;
  }

  return (
    <Container className="flight-status-detials">
      <Container className="flight-status-title">
        <FlightStatus status={flight.status} />
      </Container>
      <Card className="flight-details-card">
        <CardContent>
          <div className="flight-details-header">
            <Typography color="textSecondary">{flight.airline}</Typography>
            <Typography sx={{ fontSize: "32px", fontWeight: "500" }}>
              {flight.flightNumber}
            </Typography>
          </div>
          <Container className="flight-details-status">
            <Typography>{flight.origin}</Typography>
            <Divider className="flight-icon">
              <FlightTakeoffIcon fontSize={"large"} />
            </Divider>
            <Typography>{flight.destination}</Typography>
          </Container>
          <Typography component="div">
            {formatDate(flight.departureTime)}
          </Typography>
          <Typography variant="h4" component="div">
            {formatTime(flight.departureTime)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FlightDetailPage;
