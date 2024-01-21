import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FC, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetFlightsListDetails from "../../hooks.ts/useGetFlightsListDetails";
import FlightDetail from "../../utils/FlightDetail";
import { formatDateTime } from "../../utils/dateUtils";
import LoaderAnimation from "../common/LoaderAnimation";
import FlightStatus from "../flightStatus/FlightStatus";
import "./FlightListTable.css";
import FlightsTableHeaders from "./FlightTableHeaders";

const TableRowCell: FC<{ flightId: number; value: string | ReactNode }> = ({
  flightId,
  value,
}) => {
  const navigate = useNavigate();

  return (
    <TableCell onClick={() => navigate(`/flight/${flightId}`)}>
      {value}
    </TableCell>
  );
};

const FlightsListTable: FC = () => {
  const rowsPerPage = 8;
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState<keyof FlightDetail>("departureTime");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const flightsDetails = useGetFlightsListDetails();

  if (!flightsDetails) {
    return <LoaderAnimation />;
  }

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

  const sortedFlights = flightsDetails
    .slice()
    .sort(getComparator(order, orderBy));

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
                  <TableRowCell
                    flightId={flight.id}
                    value={flight.flightNumber}
                  />
                  <TableRowCell flightId={flight.id} value={flight.airline} />
                  <TableRowCell flightId={flight.id} value={flight.origin} />
                  <TableRowCell
                    flightId={flight.id}
                    value={flight.destination}
                  />
                  <TableRowCell
                    flightId={flight.id}
                    value={formatDateTime(flight.departureTime)}
                  />
                  <TableRowCell
                    flightId={flight.id}
                    value={<FlightStatus status={flight.status} />}
                  />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="flight-table-pagination"
        component="div"
        count={flightsDetails.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
      />
    </Card>
  );
};

export default FlightsListTable;
