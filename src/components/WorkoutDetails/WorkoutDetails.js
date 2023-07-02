import React from "react";

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
      <h3 style={{ flex: "1", textAlign: "center", margin: "0 5%" }}>Weight: {workout.weight}lbs</h3>
      <h3 style={{ flex: "1", textAlign: "center", margin: "0 5%" }}>Reps: {workout.reps}</h3>
      <h3 style={{ flex: "1", textAlign: "center", margin: "0 5%" }}>Sets: {workout.sets}</h3>
      <h3 style={{ flex: "1", textAlign: "center", margin: "0 5%" }}>Minutes: {workout.duration}</h3>
      <h3 style={{ flex: "1", textAlign: "center", margin: "0 5%" }}>
        Volume: {volumeEquation(workout.reps, workout.weight, workout.sets)}lbs
      </h3>
    </>
  );
}

export default WorkoutDetails;
