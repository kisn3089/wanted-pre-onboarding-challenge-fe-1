import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        WANTED
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth" className="li">
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" className="li">
              TODO
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
