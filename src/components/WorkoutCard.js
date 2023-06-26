import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import WorkoutDetails from "./WorkoutDetails";
import WorkoutForm from "./WorkoutForm";

function WorkoutCard({ workout, setWorkoutsDisplay, workoutsDisplay }) {
  const primaryMusclesHitMap = workout.musclesHit.primary.join(", ");
  const secondaryMusclesHitMap = workout.musclesHit.secondary.join(", ");
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
    fetch(`http://localhost:3000/workouts/${workout.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        setWorkoutsDisplay((prevWorkoutsDisplay) => {
          return prevWorkoutsDisplay.filter((prevWorkout) => prevWorkout.id !== workout.id);
        });
      });
  }

  return (
    <Card style={{ border: "black 2px solid" }}>
      {editButtonClicked ? (
        <WorkoutForm
          workout={workout}
          onUndo={handleEditButton}
          setWorkoutsDisplay={setWorkoutsDisplay}
          workoutsDisplay={workoutsDisplay}
          inputText={inputText}
          setInputText={setInputText}
        />
      ) : (
        <>
          <Card.Content style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: "1 0 auto" }}>
              <h2 style={{ textAlign: "center" }}>{workout.name}</h2>
              <div style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={workout.image}
                />
              </div>
              <Card.Meta style={{ color: "blue", textAlign: "center" }}>
                Primary Muscle(s) Hit : {primaryMusclesHitMap}
              </Card.Meta>
              <Card.Meta style={{ color: "orange", textAlign: "center" }}>
                Secondary Muscle(s) Hit: {secondaryMusclesHitMap}
              </Card.Meta>
            </div>
            <Card.Description style={{ flexShrink: "0" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <WorkoutDetails workout={workout} />
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={handleEditButton}
                basic
                color="green"
                style={{ marginRight: "2px", border: "2px solid" }}
              >
                <strong>Edit Workout</strong>
              </Button>
              <Button onClick={handleDeleteButton} basic color="red" style={{ border: "2px solid" }}>
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
