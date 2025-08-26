/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styles from "./nav.module.css";
import axios from "axios";
import serverContext from "../../store/server";
import adminContext from "../../store/admin";

axios.defaults.withCredentials = true;
function Nav() {
  const { serverURL } = useContext(serverContext);
  const { getAdmin } = useContext(adminContext);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const response = await axios.post(`${serverURL}/api/auth/logout`);
      getAdmin();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src="/src/assets/logo.png" alt="Trendora Logo" />
        <Link to="/home">Trendora</Link>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
export default Nav;
