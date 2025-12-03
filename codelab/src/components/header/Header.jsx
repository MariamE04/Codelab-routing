import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      {/* Øverste header */}
      <div className="top-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Bornholmer Tours</h1>
        </div>
        <NavLink to="/login" className="login-button">Login</NavLink>
      </div>

      {/* Nederste navigation */}
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/travels" className={({ isActive }) => (isActive ? "active" : "")}>Travels</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;