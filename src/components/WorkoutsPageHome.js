import React, { useContext } from "react";
import WorkoutCard from "./WorkoutCard";
import { v4 as uuid } from "uuid";
import { Card } from "semantic-ui-react";
import { WorkoutContext } from "../context/WorkoutContext";

function WorkoutsPageHome() {
  const { workouts } = useContext(WorkoutContext);

  const workoutGroups = ["Bicep", "Back", "Chest", "Tricep", "Shoulder", "Leg"].reduce((groups, group) => {
    groups[group] = workouts
      .filter((workout) => workout.muscleGroup === group)
      .map((workout) => <WorkoutCard key={uuid()} workout={workout} />);
    return groups;
  }, {});

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
