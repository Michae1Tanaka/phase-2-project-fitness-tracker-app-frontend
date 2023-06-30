import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function AddSessionForm() {
  const [addSessionClicked, setAddSessionClicked] = useState(false);
  const options = [
    { key: "b", text: "Biceps", value: "Bicep" },
    { key: "a", text: "Back", value: "Back" },
    { key: "c", text: "Chest", value: "Chest" },
    { key: "t", text: "Triceps", value: "Tricep" },
    { key: "s", text: "Shoulders", value: "Shoulder" },
    { key: "l", text: "Legs", value: "Leg" },
  ];

  function displayEditSessionForm(e) {
    setAddSessionClicked(!addSessionClicked);
  }

  return (
    <>
      {addSessionClicked ? (
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
            <Form.Input
              fluid
              required
              name="currentWorkoutVolume"
              type="number"
              label="Current Workout Volume"
              placeholder="What is your current muscle group's volume?"
              step="100"
            />
            <Form.Input fluid required name="currentDate" type="date" label="Date" placeholder="Workout Date" />
          </Form.Group>
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      ) : (
        <Form.Button
          onClick={displayEditSessionForm}
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          Edit Workout Session
        </Form.Button>
      )}
    </>
  );
}

export default AddSessionForm;
