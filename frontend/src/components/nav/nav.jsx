import { NavLink, Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import "./nav.css";
import AuthContext from "../../context/authContext";
import axios from "axios";
import UserContext from "../../context/userContext";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { serverURL } = useContext(AuthContext);
  const { getCurrentUser } = useContext(UserContext);
  async function handleLogout() {
    try {
      const response = await axios.post(`${serverURL}/api/auth/logout`);
      if (response.status == 200 || response.status == 201) {
        getCurrentUser();
        console.log("navigating")
        Navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="nav">
      <div className="logo">
        <img src="/src/assets/logo.jpg" alt="Trendora Logo" />
        <Link to="/hero">Trendora</Link>
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
              <Link
                to="/logout"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
