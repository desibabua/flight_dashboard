import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="appBar">
      <Toolbar sx={{ margin: "auto 20px" }}>
        <Typography
          variant="h2"
          component="div"
          className="appBar-title"
          onClick={() => navigate("/")}
        >
          FlightFolio
        </Typography>
        <Typography sx={{ flexGrow: 1 }} />
        <FlightTakeoffIcon
          sx={{ height: "100px", width: "100px", color: "black" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
