import React, { useContext, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import WorkoutDetails from "../WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../EditWorkoutForm/EditWorkoutForm";
import { WorkoutContext } from "../../context/WorkoutContextProvider";
import "./WorkoutCard.css";

function WorkoutCard({ workout }) {
  const { setFilteredWorkouts, setWorkouts } = useContext(WorkoutContext);
  const primaryMusclesHitMap = Array.isArray(workout.musclesHit.primary) ? workout.musclesHit.primary.join(", ") : "";
  const secondaryMusclesHitMap = Array.isArray(workout.musclesHit.secondary)
    ? workout.musclesHit.secondary.join(", ")
    : "";
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const [inputText, setInputText] = useState({
    name: workout.name,
    muscleGroup: workout.muscleGroup,
    weight: workout.weight,
    reps: workout.reps,
    sets: workout.sets,
    duration: workout.duration,
    image: workout.image,
    musclesHit: {
      primary: workout.musclesHit.primary,
      secondary: workout.musclesHit.secondary,
    },
  });

  function handleEditButton() {
    setEditButtonClicked(!editButtonClicked);
  }

  function handleDeleteButton() {
    fetch(`https://json-server-api-fitness-tracker.onrender.com/workouts/${workout.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        setFilteredWorkouts((prevWorkoutsDisplay) => {
          return prevWorkoutsDisplay.filter((prevWorkout) => prevWorkout.id !== workout.id);
        });
        setWorkouts((prevWorkouts) => {
          return prevWorkouts.filter((prevWorkout) => prevWorkout.id !== workout.id);
        });
      });
  }
  return (
    <Card>
      {editButtonClicked ? (
        <WorkoutForm workout={workout} onUndo={handleEditButton} inputText={inputText} setInputText={setInputText} />
      ) : (
        <>
          <Card.Content>
            <div>
              <h2>{workout.name}</h2>
              <div id="imageDiv">
                <Image src={workout.image} />
              </div>
              <Card.Meta id="primary">Primary Muscle(s) Hit : {primaryMusclesHitMap}</Card.Meta>
              <Card.Meta id="secondary">Secondary Muscle(s) Hit: {secondaryMusclesHitMap}</Card.Meta>
            </div>
            <Card.Description>
              <div id="workoutDetails">
                <WorkoutDetails workout={workout} />
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={handleEditButton} basic color="green">
                <strong>Edit Workout</strong>
              </Button>
              <Button onClick={handleDeleteButton} basic color="red">
                <strong>Delete Workout</strong>
              </Button>
            </div>
          </Card.Content>
        </>
      )}
    </Card>
  );
}

export default WorkoutCard;
