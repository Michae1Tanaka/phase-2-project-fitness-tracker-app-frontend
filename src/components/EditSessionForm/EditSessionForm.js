import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { WorkoutContext } from "../../context/WorkoutContextProvider";
import "./EditSessionForm.css";

function EditSessionForm() {
  const { homePageSessions, setHomePageSessions } = useContext(WorkoutContext);

  const [addSessionClicked, setAddSessionClicked] = useState(false);
  const [sessionInput, setSessionInput] = useState({
    muscleGroup: "",
    currentWorkoutVolume: "",
    currentDate: "",
  });

  const options = [
    { key: "b", text: "Biceps", value: "Bicep" },
    { key: "a", text: "Back", value: "Back" },
    { key: "c", text: "Chest", value: "Chest" },
    { key: "t", text: "Triceps", value: "Tricep" },
    { key: "s", text: "Shoulders", value: "Shoulder" },
    { key: "l", text: "Legs", value: "Leg" },
    { key: "f", text: "Forearms", value: "Forearms" },
    { key: "co", text: "Core", value: "Core" },
  ];

  function handleInputChange(e, { name, value }) {
    setSessionInput((previousSession) => {
      return {
        ...previousSession,
        [name]: value,
      };
    });
  }

  function displayEditSessionForm(e) {
    setAddSessionClicked(!addSessionClicked);
  }

  function handleEditWorkoutSessionSubmit(e) {
    e.preventDefault();

    const existingSession = homePageSessions.find((session) => session.muscleGroup === sessionInput.muscleGroup);

    if (!existingSession) {
      alert("No existing session found for this muscle group.");
      return;
    }

    const updatedSession = {
      ...existingSession,
      lastWorkoutVolume: existingSession.currentWorkoutVolume,
      currentWorkoutVolume: sessionInput.currentWorkoutVolume,
      previousDate: existingSession.currentDate,
      currentDate: sessionInput.currentDate,
    };

    fetch(`https://json-server-api-fitness-tracker.onrender.com/sessions/${existingSession.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSession),
    })
      .then((r) => r.json())
      .then((updatedSessionFromServer) => {
        setSessionInput({
          muscleGroup: "",
          currentWorkoutVolume: "",
          currentDate: "",
        });
        setAddSessionClicked(!addSessionClicked);
        setHomePageSessions((prevSessions) =>
          prevSessions.map((session) => {
            return session.id === updatedSessionFromServer.id ? updatedSessionFromServer : session;
          })
        );
      });
  }

  return (
    <>
      {addSessionClicked ? (
        <Form onSubmit={handleEditWorkoutSessionSubmit}>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              required
              name="muscleGroup"
              label="Select Muscle Group"
              options={options}
              placeholder="Muscle Group"
              value={sessionInput.muscleGroup}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              required
              name="currentWorkoutVolume"
              type="number"
              label="Current Workout Volume"
              placeholder="What is your current muscle group's volume?"
              step="100"
              value={sessionInput.currentWorkoutVolume}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              required
              name="currentDate"
              type="date"
              label="Date"
              placeholder="Workout Date"
              value={sessionInput.currentDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      ) : (
        <Form.Button
          onClick={displayEditSessionForm}
          color="green"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          Update Workout Session
        </Form.Button>
      )}
    </>
  );
}

export default EditSessionForm;
