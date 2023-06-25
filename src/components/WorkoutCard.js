import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import WorkoutDetails from "./WorkoutDetails";

function WorkoutCard({ workout }) {
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const primaryMusclesHitMap = workout.musclesHit.primary.join(", ");
  const secondaryMusclesHitMap = workout.musclesHit.secondary.join(", ");

  const editForm = (
    <>
      <h2 style={{ textAlign: "center" }}>What would you like to change?</h2>
      <form className="ui form">
        <div className="field">
          <label>Workout Name</label>
          <input type="text" name="workout-name" placeholder="Workout Name" />
        </div>
        <div className="field">
          <label>Primary Muscle(s) Hit</label>
          <input type="text" name="primary-targets" placeholder="Primary Muscle(s) Hit" />
        </div>
        <div className="field">
          <label>Secondary Muscle(s) Hit</label>
          <input type="text" name="secondary-targets" placeholder="Secondary Muscle(s) Hit" />
        </div>
        <div className="field" style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "20%" }}>
            <label>Weight</label>
            <input type="text" name="weight" placeholder="Weight"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Reps</label>
            <input type="text" name="reps" placeholder="Reps"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Sets</label>
            <input type="text" name="sets" placeholder="Sets"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Duration</label>
            <input type="text" name="duration" placeholder="Duration"></input>
          </div>
        </div>
        <div className="ui two buttons">
          <Button onClick={handleSubmit} basic color="green" style={{ border: "2px solid" }} type="submit">
            <strong>Submit</strong>
          </Button>
          <Button onClick={handleEditButton} basic color="red" style={{ border: "2px solid" }}>
            <strong>Undo Changes</strong>
          </Button>
        </div>
      </form>
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEditButton(e) {
    setEditButtonClicked(!editButtonClicked);
  }

  function handleDeleteButton(e) {
    console.log(e.target);
  }

  return (
    <Card style={{ border: "black 2px solid" }}>
      {editButtonClicked ? (
        editForm
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
