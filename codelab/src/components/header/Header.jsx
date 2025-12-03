import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/travels" className={({ isActive }) => (isActive ? "active" : "")}>
            Travels
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
            Admin
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
