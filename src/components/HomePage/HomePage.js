import React, { useState, useEffect } from "react";
import { Table, Segment, Image, Container, Header } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import EditSessionForm from "../EditSessionForm/EditSessionForm";
import "./HomePage.css";

function HomePage() {
  const [homePageSessions, setHomePageSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  const tableHeaders = [
    "Muscle Group",
    "Current Volume",
    "Previous Volume",
    "Change in Volume",
    "Current Workout Date",
    "Previous Workout Date",
  ];

  const tableHeadersMap = tableHeaders.map((header) => {
    return <Table.HeaderCell key={uuid()}>{header}</Table.HeaderCell>;
  });

  const homePageSessionsMap = homePageSessions.map((session) => {
    const volumeDifference = session.currentWorkoutVolume - session.lastWorkoutVolume;
    const formattedCurrentDate = formatDate(session.currentDate);
    const formattedPreviousDate = formatDate(session.previousDate);
    return (
      <Table.Row key={uuid()}>
        <Table.Cell>{session.muscleGroup}</Table.Cell>
        <Table.Cell>{session.currentWorkoutVolume}</Table.Cell>
        <Table.Cell>{session.lastWorkoutVolume}</Table.Cell>
        <Table.Cell
          style={
            volumeDifference < 0
              ? { backgroundColor: "rgba(244, 67, 54, 0.2)" }
              : { backgroundColor: "rgba(76, 175, 80, 0.2)" }
          }
        >
          {volumeDifference}
        </Table.Cell>
        <Table.Cell>{formattedCurrentDate}</Table.Cell>
        <Table.Cell>{formattedPreviousDate}</Table.Cell>
      </Table.Row>
    );
  });

  useEffect(() => {
    const fetchVolume = async () => {
      try {
        const res = await fetch("http://localhost:3000/sessions");
        const sessionsData = await res.json();
        setHomePageSessions(sessionsData);
        setIsLoading(!isLoading);
      } catch (error) {
        console.error("Failed to fetch Sessions data", error);
      }
    };
    fetchVolume();
  }, []);

  return (
    <>
      <Container text>
        <Header as="h1" color="blue" textAlign="center">
          Welcome to Your Fitness Tracker
        </Header>
        <p>Keep track of your workouts and progress over time. Let's get started!</p>
      </Container>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>{tableHeadersMap}</Table.Row>
        </Table.Header>
        {isLoading ? (
          <Segment loading placeholder size="massive">
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
        ) : (
          <Table.Body>{homePageSessionsMap}</Table.Body>
        )}
      </Table>
      <EditSessionForm homePageSessions={homePageSessions} setHomePageSessions={setHomePageSessions} />
    </>
  );
}

export default HomePage;
