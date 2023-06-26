import React, { useContext, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { WorkoutContext } from "../context/WorkoutContextProvider";

function WorkoutForm({ workout, onUndo, inputText, setInputText }) {
  const { setFilteredWorkouts } = useContext(WorkoutContext);

  function handleEditFormSubmit(e) {
    e.preventDefault();
    let primaryArray = Array.isArray(inputText.musclesHit.primary)
      ? inputText.musclesHit.primary
      : inputText.musclesHit.primary.split(",").map((str) => str.trim());
    let secondaryArray = Array.isArray(inputText.musclesHit.secondary)
      ? inputText.musclesHit.secondary
      : inputText.musclesHit.secondary.split(",").map((str) => str.trim());

    const updatedInput = {
      ...inputText,
      musclesHit: {
        primary: primaryArray,
        secondary: secondaryArray,
      },
    };

    fetch(`http://localhost:3000/workouts/${workout.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updatedInput }),
    })
      .then((r) => r.json())
      .then((updatedWorkout) => {
        setFilteredWorkouts((workouts) =>
          workouts.map((workout) => (workout.id === updatedWorkout.id ? updatedWorkout : workout))
        );
      });
  }

  useEffect(() => {
    setInputText({
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
  }, [workout]);

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

  return (
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
              type="number"
              name="weight"
              placeholder="Weight"
            ></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Reps</label>
            <input value={inputText.reps} onChange={onEditChange} type="number" name="reps" placeholder="Reps"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Sets</label>
            <input value={inputText.sets} onChange={onEditChange} type="number" name="sets" placeholder="Sets"></input>
          </div>
          <div style={{ width: "20%" }}>
            <label>Duration</label>
            <input
              value={inputText.duration}
              onChange={onEditChange}
              type="number"
              name="duration"
              placeholder="Duration"
            ></input>
          </div>
        </div>
        <div className="ui two buttons">
          <Button basic color="green" style={{ border: "2px solid" }} type="submit">
            <strong>Submit</strong>
          </Button>
          <Button onClick={onUndo} basic color="red" style={{ border: "2px solid" }}>
            <strong>Undo Changes</strong>
          </Button>
        </div>
      </form>
    </>
  );
}

export default WorkoutForm;
