import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu secondary>
      <Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} />
      <Menu.Item name="workouts" active={activeItem === "workouts"} onClick={handleItemClick} />
      <Menu.Item name="Bicep Workouts" active={activeItem === "Bicep Workouts"} onClick={handleItemClick} />
      <Menu.Item name="Back Workouts" active={activeItem === "Back Workouts"} onClick={handleItemClick} />
      <Menu.Item name="Chest Workouts" active={activeItem === "Chest Workouts"} onClick={handleItemClick} />
      <Menu.Item name="Tricep Workouts" active={activeItem === "Tricep Workouts"} onClick={handleItemClick} />
      <Menu.Item name="Shoulder Workouts" active={activeItem === "Shoulder Workouts"} onClick={handleItemClick} />
      <Menu.Item name="Leg Workouts" active={activeItem === "Leg Workouts"} onClick={handleItemClick} />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        {/* <Menu.Item name="logout" active={activeItem === "logout"} onClick={handleItemClick} /> */}
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
