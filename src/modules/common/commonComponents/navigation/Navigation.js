import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/users"}>Users</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
