import React from "react";
import { Form, Button } from "semantic-ui-react";

function AddWorkoutSession() {
  const options = [
    { key: "b", text: "Biceps", value: "Bicep" },
    { key: "a", text: "Back", value: "Back" },
    { key: "c", text: "Chest", value: "Chest" },
    { key: "t", text: "Triceps", value: "Tricep" },
    { key: "s", text: "Shoulders", value: "Shoulder" },
    { key: "l", text: "Legs", value: "Leg" },
    { key: "f", text: "Forearms", value: "Forearm" },
    { key: "co", text: "Core", value: "Core" },
  ];
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          required
          name="muscleGroup"
          label="Select Muscle Group"
          options={options}
          placeholder="Muscle Group"
        />
      </Form.Group>
      <Form.Group unstackable widths={2}>
        <Form.Input
          label="Current Muscle Group Volume"
          placeholder="Volume formula: Workouts count x Sets count x Reps count x Weight (for each muscle group)"
        />
        <Form.Input type="date" label="Date Of Current Workout" placeholder="Date Format: yyyy-mm-dd" />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          label="Previous Muscle Group Volume"
          placeholder="Volume formula: Workouts count x Sets count x Reps count x Weight (for each muscle group)"
        />
        <Form.Input type="date" label="Date Of Previous Workout" placeholder="Date Format: yyyy-mm-dd" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddWorkoutSession;
