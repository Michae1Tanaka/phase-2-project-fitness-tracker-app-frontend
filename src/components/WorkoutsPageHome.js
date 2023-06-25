import React, { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { v4 as uuid } from "uuid";
import { Card } from "semantic-ui-react";

function WorkoutsPageHome() {
  const [workoutsDisplay, setWorkoutsDisplay] = useState([]);

  const workoutGroups = ["Bicep", "Back", "Chest", "Tricep", "Shoulder", "Leg"].reduce((groups, group) => {
    groups[group] = workoutsDisplay
      .filter((workout) => workout.muscleGroup === group)
      .map((workout) => (
        <WorkoutCard
          key={uuid()}
          workout={workout}
          setWorkoutsDisplay={setWorkoutsDisplay}
          workoutsDisplay={workoutsDisplay}
        />
      ));
    return groups;
  }, {});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/workouts");
        const workoutsFromFetch = await response.json();
        setWorkoutsDisplay(workoutsFromFetch);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(workoutGroups).map((group) => (
        <div key={uuid()}>
          <h1 style={{ textAlign: "center" }}>{group} Workouts</h1>
          <Card.Group itemsPerRow="3">{workoutGroups[group]}</Card.Group>
        </div>
      ))}
    </div>
  );
}

export default WorkoutsPageHome;
