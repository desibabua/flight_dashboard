import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import FlightsList from "./components/pages/flightList/FlightList";
import { defaultFlightDetails } from "./components/pages/flightList/FlightDetail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FlightDetailPage from "./components/pages/flightDetail/FlightDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<FlightsList flights={defaultFlightDetails} />}
          />

          <Route path="/flight/:id" element={<FlightDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
