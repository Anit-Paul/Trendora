import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import styles from "./login.module.css";
import Password from "../password/password";
import { useContext, useState } from "react";
import axios from "axios";
import serverContext from "../../store/server";





function Login() {
  const Navigate = useNavigate();
  const { serverURL } = useContext(serverContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverURL}/api/admin/login`,
        {
          email,
          password,
        },
        { withCredentials: true } //for sending the credentials like cookies, authorization headers with
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        setEmail("");
        setPassword("");
        //getCurrentUser()
        Navigate("/");
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
            />
          </div>
          <Password onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className={styles.loginButton}>
            <AiOutlineLogin />
            Login
          </button>
          <Link to="/registration" className={styles.signupLink}>
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
