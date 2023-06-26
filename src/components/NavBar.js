import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu secondary>
      <Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} />
      <Menu.Item name="workouts" active={activeItem === "workouts"} onClick={handleItemClick} />
      <Menu.Item name="biceps" active={activeItem === "biceps"} onClick={handleItemClick} />
      <Menu.Item name="back" active={activeItem === "back"} onClick={handleItemClick} />
      <Menu.Item name="chest" active={activeItem === "chest"} onClick={handleItemClick} />
      <Menu.Item name="triceps" active={activeItem === "triceps"} onClick={handleItemClick} />
      <Menu.Item name="shoulders" active={activeItem === "shoulders"} onClick={handleItemClick} />
      <Menu.Item name="legs" active={activeItem === "legs"} onClick={handleItemClick} />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
