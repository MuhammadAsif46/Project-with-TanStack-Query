import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">TanStack-Query</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/old">FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/new"> Fetch-React-Query </NavLink>
          </li>
          <li>
            <NavLink to="/infinite"> Infinite-Scroll </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
