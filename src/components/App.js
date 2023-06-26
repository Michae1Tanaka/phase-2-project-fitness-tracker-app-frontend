import React from "react";
import HomeWorkoutsPage from "./WorkoutsPageHome";
import "../css/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeWorkoutsPage />} />
        <Route path="/workouts" element={<HomeWorkoutsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
//imported react router dom
//sets routes and navBar.
//begin working on navbar
