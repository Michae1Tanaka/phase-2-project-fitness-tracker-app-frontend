import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/workouts");
        const workoutsFromFetch = await response.json();
        console.log(workoutsFromFetch);
      } catch (error) {
        console.alert(error);
      }
    }
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
