import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/users"}>Users</NavLink>
      </li>
      <li>
        <NavLink to={"/albums"}>Albums</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
