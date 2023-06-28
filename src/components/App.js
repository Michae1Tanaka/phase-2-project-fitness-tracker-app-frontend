import React from "react";
import WorkoutsPage from "./WorkoutsPage";
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
          <Route exact path="/workouts" element={<WorkoutsPage />} />
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}

export default App;
// broke delete button
//cant get submit button to work
//idk wtf im doing
// this is sooooooooooo frustrating
