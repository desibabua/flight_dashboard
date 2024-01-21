import Typography from "@mui/material/Typography";
import React from "react";
import "./FlightStatus.css";

const statusColors: { [status: string]: string } = {
  "On Time": "on-time-status",
  Delayed: "delayed-status",
  Boarding: "boarding-status",
  Departed: "departed-status",
};

const FlightStatus: React.FC<{ status: string }> = ({ status }) => {
  return (
    <Typography
      component="div"
      className={`flight-status ${statusColors[status]}`}
    >
      {status}
    </Typography>
  );
};

export default FlightStatus;
