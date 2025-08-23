import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import "./nav.css";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <img src="/src/assets/logo.jpg" alt="Trendora Logo" />
        <Link to="/home">Trendora</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/collections" className="nav-link">
          Collections
        </NavLink>
        <NavLink to="/About" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contactUs" className="nav-link">
          Contact Us
        </NavLink>
      </div>
      <div className="user">
        <div
          className="dropdown"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <VscAccount />
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/myAccount">My Account</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
