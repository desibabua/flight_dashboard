import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import FlightDetails from "./components/pages/FlightDetails";
import FlightsList from "./components/pages/FlightsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FlightsList />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
