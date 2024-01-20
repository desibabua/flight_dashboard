import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FC, useState } from "react";
import FlightDetail from "./FlightDetails";
import FlightsTableHeaders from "./FlightTableHeaders";
import "./FlightList.css";

interface FlightTableProps {
  flights: FlightDetail[];
}

const FlightsList: FC<FlightTableProps> = ({ flights }) => {
  const rowsPerPage = 10;
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<keyof FlightDetail>("departureTime");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleRequestSort = (property: keyof FlightDetail) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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

  const sortedFlights = flights.slice().sort(getComparator(order, orderBy));

  return (
    <Card className="flight-list-table">
      <TableContainer>
        <Table>
          <FlightsTableHeaders
            order={order}
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
          />
          <TableBody className="flight-table-body">
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
        className="flight-table-pagination"
        component="div"
        count={flights.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
      />
    </Card>
  );
};

export default FlightsList;
