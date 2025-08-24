import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Password from "../password/password";
import { useContext, useState } from "react";
import axios from "axios";
import serverContext from "../../store/server";
import adminContext from "../../store/admin";

function Login() {
  const navigate = useNavigate();
  const { serverURL } = useContext(serverContext);
  const { getAdmin } = useContext(adminContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverURL}/api/admin/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("login success:", response.data);

        setEmail("");
        setPassword("");

        // refresh admin state (ignore errors so navigation always happens)
        getAdmin().catch((err) => console.error("getAdmin failed:", err));

        console.log("navigating...");
        navigate("/home");   // ✅ will run regardless of getAdmin result
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.formInput}
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <Password onChange={(e) => setPassword(e.target.value)} value={password} />

          <button type="submit" className={styles.loginButton}>
            <AiOutlineLogin />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
