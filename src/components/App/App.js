import React from "react";
import WorkoutsPage from "../WorkoutsPage/WorkoutsPage";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "../../context/WorkoutContextProvider";
import AddWorkout from "../AddWorkoutForm/AddWorkoutForm";
import HomePage from "../HomePage/HomePage";
import AddWorkoutSession from "../AddWorkoutSession/AddWorkoutSession";

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
