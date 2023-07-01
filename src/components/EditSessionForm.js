import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function EditSessionForm({ homePageData, setHomePageData }) {
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
  ];

  function handleInputChange(e, { name, value }) {
    setSessionInput((previousSession) => {
      return {
        ...previousSession,
        [name]: value,
      };
    });
  }

  console.log(homePageData);

  function displayEditSessionForm(e) {
    setAddSessionClicked(!addSessionClicked);
  }

  function handleEditWorkoutSessionSubmit(e) {
    e.preventDefault();

    const existingSession = homePageData.find((session) => session.muscleGroup === sessionInput.muscleGroup);

    if (!existingSession) {
      console.error("No existing session found for this muscle group.");
      return;
    }

    const updatedSession = {
      ...existingSession,
      lastWorkoutVolume: existingSession.currentWorkoutVolume,
      currentWorkoutVolume: sessionInput.currentWorkoutVolume,
      previousDate: existingSession.currentDate,
      currentDate: sessionInput.currentDate,
    };

    fetch(`http://localhost:3000/volume/${existingSession.id}`, {
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

        setHomePageData((prevSessions) =>
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
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          Edit Workout Session
        </Form.Button>
      )}
    </>
  );
}

export default EditSessionForm;
