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
          {
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
          }
          {
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
          }
          {
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
          }
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
