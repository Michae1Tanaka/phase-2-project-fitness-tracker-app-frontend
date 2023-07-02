import React from "react";
import "./WorkoutDetails.css";

function WorkoutDetails({ workout }) {
  function volumeEquation(workoutWeight, workoutReps, workoutSets) {
    const volume = workoutWeight * workoutReps * workoutSets;
    const formattedVolume = volume.toLocaleString();
    if (formattedVolume.length > 3) {
      return volume.toLocaleString();
    } else return volume;
  }

  return (
    <>
      <h3>Weight: {workout.weight}lbs</h3>
      <h3>Reps: {workout.reps}</h3>
      <h3>Sets: {workout.sets}</h3>
      <h3>Minutes: {workout.duration}</h3>
      <h3>Volume: {volumeEquation(workout.reps, workout.weight, workout.sets)}lbs</h3>
    </>
  );
}

export default WorkoutDetails;
