import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import FlightsList from "./components/pages/flightList/FlightList";
import { defaultFlightDetails } from "./components/pages/flightList/FlightDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <FlightsList flights={defaultFlightDetails} />
    </div>
  );
}

export default App;
