import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar sx={{ margin: "auto 20px" }}>
        <Typography variant="h2" component="div" className="appBar-title">
          Arrivals
        </Typography>
        <img
          src="./airplaneLogo100.png"
          alt="Flight Logo"
          className="flight-logo"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
