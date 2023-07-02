import React from "react";
import WorkoutsPage from "./WorkoutsPage";
import "../css/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "../context/WorkoutContextProvider";
import AddWorkout from "./AddWorkoutForm";
import HomePage from "./HomePage";
import AddWorkoutSession from "./AddWorkoutSession";

function App() {
  return (
    <Router>
      <WorkoutProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/add-workout" element={<AddWorkout />} />
          <Route path="/add-session" element={<AddWorkoutSession />} />
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}

export default App;
