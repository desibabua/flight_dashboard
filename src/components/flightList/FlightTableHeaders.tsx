import { FC } from "react";
import FlightDetail from "../../utils/FlightDetail";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const columns: {
  field: keyof FlightDetail;
  displayName: string;
}[] = [
  {
    field: "flightNumber",
    displayName: "Flight Number",
  },
  {
    field: "airline",
    displayName: "Airline",
  },
  {
    field: "origin",
    displayName: "Origin",
  },
  {
    field: "destination",
    displayName: "Destination",
  },
  {
    field: "departureTime",
    displayName: "Departure Time",
  },
  {
    field: "status",
    displayName: "Status",
  },
];

const FlightsTableHeaders: FC<{
  orderBy: string;
  order: "asc" | "desc";
  handleRequestSort: (property: keyof FlightDetail) => void;
}> = ({ orderBy, order, handleRequestSort }) => {
  return (
    <TableHead className="flight-table-header">
      <TableRow>
        {columns.map(({ field, displayName }, index) => (
          <TableCell key={index}>
            <TableSortLabel
              active={orderBy === field}
              direction={orderBy === field ? order : "asc"}
              onClick={() => handleRequestSort(field)}
            >
              {displayName}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default FlightsTableHeaders;
