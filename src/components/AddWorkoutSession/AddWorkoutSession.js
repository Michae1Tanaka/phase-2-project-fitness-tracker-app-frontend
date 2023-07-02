import React, { useState, useContext } from "react";
import { Form, Button } from "semantic-ui-react";
import { WorkoutContext } from "../../context/WorkoutContextProvider";
import "./AddWorkoutSession.css";

function AddWorkoutSession() {
  const { setHomePageSessions, allSessions } = useContext(WorkoutContext);
  const [formData, setFormData] = useState({
    muscleGroup: "",
    currentWorkoutVolume: "",
    currentDate: "",
    lastWorkoutVolume: "",
    previousDate: "",
  });

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

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

  function handleAddSessionSubmit(e) {
    e.preventDefault();
    async function postNewSession() {
      try {
        const existingSession = allSessions.find((session) => session.muscleGroup === formData.muscleGroup);
        if (existingSession) {
          alert(
            "You cannot add another session to this muscle group. If you'd like to edit a current session please return to Home page and click 'Update Workout Session'"
          );
          return;
        }
        const resp = await fetch("http://localhost:3000/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const newSession = await resp.json();
        setHomePageSessions((prevHomePageSessions) => [...prevHomePageSessions, newSession]);
      } catch {
        console.error("Error,error");
      }
    }
    postNewSession();
  }
  return (
    <Form onSubmit={handleAddSessionSubmit}>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          required
          name="muscleGroup"
          label="Select Muscle Group"
          options={options}
          placeholder="Muscle Group"
          value={formData.muscleGroup}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group unstackable widths={2}>
        <Form.Input
          required
          name="currentWorkoutVolume"
          label="Current Muscle Group Volume"
          placeholder="Volume formula: Workouts count x Total amount of sets x Total amount of reps x Total weight (for chosen muscle group)"
          value={formData.currentWorkoutVolume}
          onChange={handleChange}
        />
        <Form.Input
          required
          name="currentDate"
          type="date"
          label="Date Of Current Workout"
          placeholder="Date Format: yyyy-mm-dd"
          value={formData.currentDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          required
          name="lastWorkoutVolume"
          label="Previous Muscle Group Volume"
          placeholder="Volume formula: Workouts count x Total amount of sets x Total amount of reps x Total weight (for chosen muscle group)"
          value={formData.lastWorkoutVolume}
          onChange={handleChange}
        />
        <Form.Input
          required
          name="previousDate"
          type="date"
          label="Date Of Previous Workout"
          placeholder="Date Format: yyyy-mm-dd"
          value={formData.previousDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Button color="green" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddWorkoutSession;
