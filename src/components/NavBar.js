import React, { useContext } from "react";
import { Input, Menu } from "semantic-ui-react";
import { WorkoutContext } from "../context/WorkoutContextProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { workouts, setFilteredWorkouts, activeItem, setActiveItem } = useContext(WorkoutContext);

  const handleItemClick = (name) => {
    setActiveItem(name);
    if (name === "workouts") {
      setFilteredWorkouts(workouts);
    } else {
      const sortedWorkouts = workouts.filter((workout) => workout.muscleGroup === name);
      setFilteredWorkouts(sortedWorkouts);
    }
  };

  return (
    <Menu secondary>
      <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} onClick={() => handleItemClick("home")} />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="workouts"
        active={activeItem === "workouts"}
        onClick={() => handleItemClick("workouts")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Bicep"
        active={activeItem === "biceps"}
        onClick={() => handleItemClick("Bicep")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Back"
        active={activeItem === "back"}
        onClick={() => handleItemClick("Back")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Chest"
        active={activeItem === "chest"}
        onClick={() => handleItemClick("Chest")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Tricep"
        active={activeItem === "triceps"}
        onClick={() => handleItemClick("Tricep")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Shoulder"
        active={activeItem === "shoulders"}
        onClick={() => handleItemClick("Shoulder")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Leg"
        active={activeItem === "legs"}
        onClick={() => handleItemClick("Leg")}
      />
      <Menu.Item
        as={Link}
        to="/add-workout"
        name="add workout"
        active={activeItem === "add workout"}
        onClick={() => handleItemClick("add workout")}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
