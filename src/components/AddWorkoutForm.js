import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: "w", text: "Select Muscle Group", value: "Select Muscle Group" },
  { key: "b", text: "Biceps", value: "Bicep" },
  { key: "a", text: "Back", value: "Back" },
  { key: "c", text: "Chest", value: "Chest" },
  { key: "t", text: "Triceps", value: "Tricep" },
  { key: "s", text: "Shoulders", value: "Shoulder" },
  { key: "l", text: "Legs", value: "Leg" },
];

function AddWorkout() {
  const [value, setValue] = useState({
    name: "",
    muscleGroup: "",
    weight: "",
    reps: "",
    sets: "",
    duration: "",
    date: "",
    notes: [],
    image: "",
    musclesHit: {
      primary: [],
      secondary: [],
    },
  });
  function handleChange(e, { name, value }) {
    if (name.includes(".")) {
      const [key, subkey] = name.split(".");
      setValue((prevValue) => ({
        ...prevValue,
        [key]: { ...prevValue[key], [subkey]: value },
      }));
    } else {
      setValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  }

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          required
          name="name"
          label="Workout Name"
          placeholder="Workout Name"
          onChange={handleChange}
          value={value.name}
        />
        <Form.Select
          fluid
          required
          name="muscleGroup"
          label="Select Muscle Group"
          options={options}
          placeholder="Muscle Group"
          onChange={handleChange}
          value={value.muscleGroup}
        />
      </Form.Group>
      <Form.Group widths="4">
        <Form.Input
          fluid
          required
          name="weight"
          type="number"
          label="Weight"
          placeholder="Weight"
          onChange={handleChange}
          value={value.weight}
        />
        <Form.Input
          fluid
          required
          name="reps"
          type="number"
          label="Reps"
          placeholder="Reps"
          onChange={handleChange}
          value={value.reps}
        />
        <Form.Input
          fluid
          required
          name="sets"
          type="number"
          label="Sets"
          placeholder="Sets"
          onChange={handleChange}
          value={value.sets}
        />
        <Form.Input
          fluid
          required
          name="duration"
          type="number"
          label="Duration"
          placeholder="Duration"
          onChange={handleChange}
          value={value.duration}
        />
      </Form.Group>
      <Form.Group widths="4">
        <Form.Input
          fluid
          required
          name="musclesHit.primary"
          label="Primary Muscle(s) Hit"
          placeholder="Primary Muscle(s) Hit"
          onChange={handleChange}
          value={value.musclesHit.primary}
        />
        <Form.Input
          fluid
          required
          name="musclesHit.secondary"
          label="Secondary Muscle(s) Hit"
          placeholder="Secondary Muscle(s) Hit"
          onChange={handleChange}
          value={value.musclesHit.secondary}
        />
        <Form.Input
          fluid
          required
          name="image"
          label="Image"
          placeholder="Image Url"
          onChange={handleChange}
          value={value.image}
        />
        <Form.Input
          fluid
          required
          name="date"
          label="Date"
          placeholder="01/01/2023"
          onChange={handleChange}
          value={value.date}
        />
      </Form.Group>
      <Form.Input
        fluid
        required
        name="notes"
        label="Notes"
        placeholder="Notes For Workouts"
        onChange={handleChange}
        value={value.notes}
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
}

export default AddWorkout;
