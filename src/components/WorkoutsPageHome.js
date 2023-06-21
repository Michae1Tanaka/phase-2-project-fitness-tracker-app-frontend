import React, { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { v4 as uuid } from "uuid";
import { Card } from "semantic-ui-react";

function WorkoutsPageHome() {
  const [workoutsDisplay, setWorkoutsDisplay] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/workouts");
        const workoutsFromFetch = await response.json();
        setWorkoutsDisplay(workoutsFromFetch);
      } catch (error) {
        console.alert(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bicep Workouts</h1>
      <Card.Group itemsPerRow="3">
        {workoutsDisplay.map((workout) => (
          <WorkoutCard key={uuid()} workout={workout} />
        ))}
      </Card.Group>
    </div>
  );
}

export default WorkoutsPageHome;
