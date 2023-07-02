import React, { useContext } from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import { v4 as uuid } from "uuid";
import { Button, Card, Segment, Header, Icon } from "semantic-ui-react";
import { WorkoutContext } from "../../context/WorkoutContextProvider";
import { Link } from "react-router-dom";
import "./WorkoutsPage.css";

function WorkoutsPage() {
  const { activeItem, filteredWorkouts } = useContext(WorkoutContext);

  const workoutGroups = ["Bicep", "Back", "Chest", "Tricep", "Shoulder", "Leg", "Forearm", "Core"].reduce(
    (groups, group) => {
      groups[group] = filteredWorkouts
        .filter((workout) => workout.muscleGroup === group)
        .map((workout) => <WorkoutCard key={uuid()} workout={workout} />);
      return groups;
    },
    {}
  );

  return (
    <div>
      {Object.keys(workoutGroups).map((group) => (
        <div key={uuid()}>
          {(activeItem === "workouts" || activeItem.toLowerCase() === group.toLowerCase()) &&
          workoutGroups[group].length > 0 ? (
            <h1>{group} Workouts </h1>
          ) : null}
          <Card.Group itemsPerRow="3">{workoutGroups[group]}</Card.Group>
          {(activeItem.toLowerCase() === group.toLowerCase() || activeItem.toLowerCase() === "workouts") &&
          workoutGroups[group].length === 0 ? (
            <>
              <Segment placeholder>
                <Header icon>
                  <Icon name="ban" />
                  There are no {group.toLowerCase()} workouts saved.
                </Header>
                <Button as={Link} to={"/add-workout"} color="green">
                  Add Workout
                </Button>
              </Segment>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default WorkoutsPage;
