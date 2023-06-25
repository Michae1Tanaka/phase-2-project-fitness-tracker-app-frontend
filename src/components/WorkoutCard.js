import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import WorkoutDetails from "./WorkoutDetails";

function WorkoutCard({ workout }) {
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [inputText, setInputText] = useState({
    name: "",
    muscleGroup: "",
    weight: 0,
    reps: 0,
    sets: 0,
    duration: 0,
    image: "",
    musclesHit: {
      primary: [],
      secondary: [],
    },
  });

  const primaryMusclesHitMap = workout.musclesHit.primary.join(", ");
  const secondaryMusclesHitMap = workout.musclesHit.secondary.join(", ");

  function handleEditFormSubmit(e) {
    e.preventDefault();
    console.log(inputText);
    // setInputText(prevInputText => {
    //   console.log(prevInputText)
    // })
  }

  function onEditChange(e) {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [key, subkey] = name.split(".");
      setInputText((prevInputText) => ({
        ...prevInputText,
        [key]: { ...prevInputText[key], [subkey]: value },
      }));
    } else {
      setInputText((prevInputText) => ({ ...prevInputText, [name]: value }));
    }
  }

  function handleEditButton(e) {
    setEditButtonClicked(!editButtonClicked);
  }

  function handleDeleteButton(e) {
    console.log(e.target);
  }

  const editForm = (
    <>
      <h2 style={{ textAlign: "center" }}>What would you like to change?</h2>
      <form
        onSubmit={handleEditFormSubmit}
        className="ui form"
        style={{ marginLeft: "2px", marginRight: "2px", marginBottom: "2px" }}
      >
        <div className="field" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: "48%" }}>
            <label>Workout Name</label>
            <input value={inputText.name} onChange={onEditChange} type="text" name="name" placeholder="Workout Name" />
          </div>
          <div style={{ width: "48%" }}>
            <label>Muscle Group</label>
            <select value={inputText.muscleGroup} onChange={onEditChange} name="muscleGroup">
              <option value="">Select muscle group</option>
              <option value="Back">Back</option>
              <option value="Bicep">Biceps</option>
              <option value="Shoulder">Shoulder</option>
              <option value="Chest">Chest</option>
              <option value="Tricep">Triceps</option>
              <option value="Leg">Legs</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>Primary Muscle(s) Hit</label>
          <input
            value={inputText.musclesHit.primary}
            onChange={onEditChange}
            type="text"
            name="musclesHit.primary"
            placeholder="Primary Muscle(s) Hit"
          />
        </div>
        <div className="field">
          <label>Secondary Muscle(s) Hit</label>
          <input
            value={inputText.musclesHit.secondary}
            onChange={onEditChange}
            type="text"
            name="musclesHit.secondary"
            placeholder="Secondary Muscle(s) Hit"
          />
        </div>
        <div className="field">
          <label>Image</label>
          <input value={inputText.image} onChange={onEditChange} type="text" name="image" placeholder="Image Url" />
        </div>
        <div className="field" style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "20%" }}>
            <label>Weight</label>
            <input
              value={inputText.weight}
              onChange={onEditChange}
              type="text"
              name="weight"
              placeholder="Weight"
            ></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Reps</label>
            <input value={inputText.reps} onChange={onEditChange} type="text" name="reps" placeholder="Reps"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Sets</label>
            <input value={inputText.sets} onChange={onEditChange} type="text" name="sets" placeholder="Sets"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Duration</label>
            <input
              value={inputText.duration}
              onChange={onEditChange}
              type="text"
              name="duration"
              placeholder="Duration"
            ></input>
          </div>
        </div>
        <div className="ui two buttons">
          <Button onClick={handleEditFormSubmit} basic color="green" style={{ border: "2px solid" }} type="submit">
            <strong>Submit</strong>
          </Button>
          <Button onClick={handleEditButton} basic color="red" style={{ border: "2px solid" }}>
            <strong>Undo Changes</strong>
          </Button>
        </div>
      </form>
    </>
  );

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
