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

const AddWorkout = () => {
  const [value, setValue] = useState("");

  const handleChange = (e, { value }) => setValue(value);

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="Workout Name" placeholder="Workout Name" />
        <Form.Select fluid label="Select Muscle Group" options={options} placeholder="Muscle Group" />
      </Form.Group>
      <Form.Group widths="4">
        <Form.Input fluid label="Weight" placeholder="Weight" />
        <Form.Input fluid label="Reps" placeholder="Reps" />
        <Form.Input fluid label="Sets" placeholder="Sets" />
        <Form.Input fluid label="Duration" placeholder="Duration" />
      </Form.Group>
      <Form.Group widths="4">
        <Form.Input fluid label="Primary Muscle(s) Hit" placeholder="Primary Muscle(s) Hit" />
        <Form.Input fluid label="Secondary Muscle(s) Hit" placeholder="Secondary Muscle(s) Hit" />
        <Form.Input fluid label="Image" placeholder="Image Url" />
        <Form.Input fluid label="Date" placeholder="Date" />
      </Form.Group>
      <Form.Input fluid label="Notes" placeholder="Notes For Workouts" />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default AddWorkout;
