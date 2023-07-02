import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { WorkoutContext } from "../../context/WorkoutContextProvider";
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
        active={activeItem === "Bicep"}
        onClick={() => handleItemClick("Bicep")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Back"
        active={activeItem === "Back"}
        onClick={() => handleItemClick("Back")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Chest"
        active={activeItem === "Chest"}
        onClick={() => handleItemClick("Chest")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Tricep"
        active={activeItem === "Tricep"}
        onClick={() => handleItemClick("Tricep")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Shoulder"
        active={activeItem === "Shoulder"}
        onClick={() => handleItemClick("Shoulder")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Leg"
        active={activeItem === "Leg"}
        onClick={() => handleItemClick("Leg")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Forearm"
        active={activeItem === "Forearm"}
        onClick={() => handleItemClick("Forearm")}
      />
      <Menu.Item
        as={Link}
        to="/workouts"
        name="Core"
        active={activeItem === "Core"}
        onClick={() => handleItemClick("Core")}
      />
      <Menu.Item
        as={Link}
        to="/add-workout"
        name="add workout"
        active={activeItem === "add workout"}
        onClick={() => handleItemClick("add workout")}
      />
      <Menu.Item
        as={Link}
        to="/add-session"
        name="add session"
        active={activeItem === "add session"}
        onClick={() => handleItemClick("add session")}
      />
    </Menu>
  );
};

export default NavBar;
