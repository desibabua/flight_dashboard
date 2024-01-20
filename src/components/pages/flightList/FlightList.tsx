import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { FC, useState } from "react";
import FlightDetail from "./FlightDetails";

const FlightsTableHeader: FC<{
  orderBy: string;
  order: "asc" | "desc";
  handleRequestSort: (property: keyof FlightDetail) => void;
}> = ({ orderBy, order, handleRequestSort }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={orderBy === "flightNumber"}
            direction={orderBy === "flightNumber" ? order : "asc"}
            onClick={() => handleRequestSort("flightNumber")}
          >
            Flight Number
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === "airline"}
            direction={orderBy === "airline" ? order : "asc"}
            onClick={() => handleRequestSort("airline")}
          >
            Airline
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === "origin"}
            direction={orderBy === "origin" ? order : "asc"}
            onClick={() => handleRequestSort("origin")}
          >
            Origin
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === "destination"}
            direction={orderBy === "destination" ? order : "asc"}
            onClick={() => handleRequestSort("destination")}
          >
            Destination
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === "departureTime"}
            direction={orderBy === "departureTime" ? order : "asc"}
            onClick={() => handleRequestSort("departureTime")}
          >
            Departure Time
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={orderBy === "status"}
            direction={orderBy === "status" ? order : "asc"}
            onClick={() => handleRequestSort("status")}
          >
            Status
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

interface FlightTableProps {
  flights: FlightDetail[];
}

const FlightsList: FC<FlightTableProps> = ({ flights }) => {
  const rowsPerPage = 10;
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<keyof FlightDetail>("departureTime");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRequestSort = (property: keyof FlightDetail) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (
    array: FlightDetail[],
    comparator: (a: FlightDetail, b: FlightDetail) => number
  ) => {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [FlightDetail, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (
    order: "asc" | "desc",
    orderBy: keyof FlightDetail
  ) => {
    return order === "asc"
      ? (a: FlightDetail, b: FlightDetail) => (a[orderBy] > b[orderBy] ? 1 : -1)
      : (a: FlightDetail, b: FlightDetail) =>
          b[orderBy] > a[orderBy] ? 1 : -1;
  };

  const sortedFlights = stableSort(flights, getComparator(order, orderBy));

  return (
    <Paper>
      <TableContainer>
        <Table>
          <FlightsTableHeader
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedFlights
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.flightNumber}</TableCell>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.origin}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>
                    {new Date(flight.departureTime).toLocaleString()}
                  </TableCell>
                  <TableCell>{flight.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={flights.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default FlightsList;
