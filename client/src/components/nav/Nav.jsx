import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import AuthContext from "../store/auth-context";

const Nav = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        WANTED
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/auth"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#a4a4a4",
                })}
                className="li"
              >
                LOGIN
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#a4a4a4" : "#fff",
                })}
                className="li"
              >
                LOGOUT
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                to="/todo"
                style={({ isActive }) => ({
                  color: isActive ? "#a4a4a4" : "#fff",
                })}
                className="li"
              >
                TODO
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
