import React, { useState, useEffect } from "react";

const WorkoutContext = React.createContext();

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
  const [homePageSessions, setHomePageSessions] = useState([]);
  const [activeItem, setActiveItem] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [allSessions, setAllSessions] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("https://json-server-api-fitness-tracker.onrender.com/workouts");
        const workoutsData = await res.json();
        setWorkouts(workoutsData);
      } catch (error) {
        console.error("Failed to fetch workouts", error);
      }
    };
    fetchWorkouts();
  }, []);

  useEffect(() => {
    const fetchHomePageSessions = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://json-server-api-fitness-tracker.onrender.com/sessions");
        const sessionsData = await res.json();
        setHomePageSessions(sessionsData);
        setAllSessions(sessionsData);
      } catch (error) {
        console.error("Failed to fetch Sessions data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomePageSessions();
  }, []);

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        setWorkouts,
        filteredWorkouts,
        setFilteredWorkouts,
        homePageSessions,
        setHomePageSessions,
        activeItem,
        setActiveItem,
        isLoading,
        allSessions,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
export { WorkoutContext, WorkoutProvider };
