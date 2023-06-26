import React, { useState, useEffect } from "react";

const WorkoutContext = React.createContext();

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:3000/workouts");
        const data = await res.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Failed to fetch workouts", error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, filteredWorkouts, setFilteredWorkouts, activeItem, setActiveItem }}>
      {children}
    </WorkoutContext.Provider>
  );
};
export { WorkoutContext, WorkoutProvider };
