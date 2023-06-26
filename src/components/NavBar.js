import React, { useContext } from "react";
import { Input, Menu } from "semantic-ui-react";
import { WorkoutContext } from "../context/WorkoutContextProvider";

const NavBar = () => {
  const { workouts, setFilteredWorkouts, activeItem, setActiveItem } = useContext(WorkoutContext);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    const sortedWorkouts = workouts.filter((workout) => {
      if (name === "workouts") {
        return true;
      } else {
        return workout.muscleGroup === name;
      }
    });

    setFilteredWorkouts(sortedWorkouts);
  };

  return (
    <Menu secondary>
      <Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} />
      <Menu.Item name="workouts" active={activeItem === "workouts"} onClick={handleItemClick} />
      <Menu.Item name="Bicep" active={activeItem === "biceps"} onClick={handleItemClick} />
      <Menu.Item name="Back" active={activeItem === "back"} onClick={handleItemClick} />
      <Menu.Item name="Chest" active={activeItem === "chest"} onClick={handleItemClick} />
      <Menu.Item name="Tricep" active={activeItem === "triceps"} onClick={handleItemClick} />
      <Menu.Item name="Shoulder" active={activeItem === "shoulders"} onClick={handleItemClick} />
      <Menu.Item name="Leg" active={activeItem === "legs"} onClick={handleItemClick} />
      <Menu.Item name="Add Workout" active={activeItem === "add workout"} />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
