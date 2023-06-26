import React from "react";
import HomeWorkoutsPage from "./WorkoutsPageHome";
import "../css/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "../context/WorkoutContextProvider";
import AddWorkout from "./AddWorkoutForm";

function App() {
  return (
    <Router>
      <WorkoutProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AddWorkout />} />
          <Route exact path="/workouts" element={<HomeWorkoutsPage />} />
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}

export default App;
