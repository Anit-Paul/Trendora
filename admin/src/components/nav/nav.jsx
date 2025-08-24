/* eslint-disable no-unused-vars */
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import "./nav.css";
import axios from "axios";
import serverContext from "../../store/server";
import adminContext from "../../store/admin";

axios.defaults.withCredentials=true;
function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {serverURL}=useContext(serverContext)
  const { getAdmin } = useContext(adminContext);
  const navigate=useNavigate()
  async function handleLogout() {
    try{
      const response=await axios.post(`${serverURL}/api/auth/logout`)
      getAdmin()
      navigate("/login")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="nav">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="Trendora Logo" />
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
              <Link to="/home" onClick={handleLogout}>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
