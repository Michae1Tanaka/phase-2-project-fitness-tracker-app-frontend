import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
function WorkoutCard({ workout }) {
  const primaryMusclesHitMap = workout.musclesHit.primary.join(", ");
  const secondaryMusclesHitMap = workout.musclesHit.secondary.join(", ");

  return (
    <Card.Group>
      <Card style={{ width: "50%", border: "black 2px solid" }}>
        <Card.Content>
          <Card.Header style={{ textAlign: "center" }}>{workout.name}</Card.Header>
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "50%",
              maxHeight: "50%",
            }}
            src={workout.name === "Ez-Bar Bicep Curl" ? "https://i.imgur.com/cy90MD4.png" : null}
          />
          <Card.Meta style={{ color: "blue", textAlign: "center" }}>
            Primary Muscle(s) Hit : {primaryMusclesHitMap}
          </Card.Meta>
          <Card.Meta style={{ color: "orange", textAlign: "center" }}>
            Secondary Muscle(s) Hit: {secondaryMusclesHitMap}
          </Card.Meta>
          <Card.Description>
            <ul>{/* {workout Notes}               */}</ul>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" style={{ marginRight: "2px", border: "2px solid" }}>
              <strong>Edit Workout</strong>
            </Button>
            <Button basic color="red" style={{ border: "2px solid" }}>
              <strong>Delete Workout</strong>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default WorkoutCard;
