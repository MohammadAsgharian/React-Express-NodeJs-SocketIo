import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Map from "./pages/map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
