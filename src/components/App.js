import React from "react";
import HomeWorkoutsPage from "./WorkoutsPageHome";
import "../css/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "../context/WorkoutContextProvider";
import AddWorkout from "./AddWorkoutForm";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <WorkoutProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/add-workout" element={<AddWorkout />} />
          <Route exact path="/workouts" element={<HomeWorkoutsPage />} />
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}

export default App;
