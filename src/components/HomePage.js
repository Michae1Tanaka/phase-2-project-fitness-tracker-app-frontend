import React, { useContext, useState, useEffect } from "react";
import { WorkoutContext } from "../context/WorkoutContextProvider";
import { Table, Segment, Image } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import AddSessionForm from "./AddSessionForm";

function HomePage() {
  const { workouts } = useContext(WorkoutContext);
  const [homePageData, setHomePageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const homePageDataMap = homePageData.map((data) => {
    const volumeDifference = data.currentWorkoutVolume - data.lastWorkoutVolume;
    let formattedVolume = 0;
    if (volumeDifference > 0 || volumeDifference === 0) {
      formattedVolume = volumeDifference;
    } else {
      formattedVolume = volumeDifference * -1;
    }
    return (
      <Table.Row key={uuid()}>
        <Table.Cell>{data.muscleGroup}</Table.Cell>
        <Table.Cell>{data.currentWorkoutVolume}</Table.Cell>
        <Table.Cell>{data.lastWorkoutVolume}</Table.Cell>
        <Table.Cell>{formattedVolume}</Table.Cell>
        <Table.Cell>{data.currentDate}</Table.Cell>
        <Table.Cell>{data.previousDate}</Table.Cell>
      </Table.Row>
    );
  });

  useEffect(() => {
    const fetchVolume = async () => {
      try {
        const res = await fetch("http://localhost:3000/volume");
        const volumeData = await res.json();
        setHomePageData(volumeData);
        setIsLoading(!isLoading);
      } catch (error) {
        console.error("Failed to fetch Volume data", error);
      }
    };
    fetchVolume();
  }, []);

  return (
    <>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>{tableHeadersMap}</Table.Row>
        </Table.Header>
        {isLoading ? (
          <Segment loading placeholder size="massive" style={{ minWidth: "775%" }}>
            <Image src="/images/wireframe/paragraph.png" />
          </Segment>
        ) : (
          <Table.Body>{homePageDataMap}</Table.Body>
        )}
      </Table>
      <AddSessionForm />
    </>
  );
}

export default HomePage;
