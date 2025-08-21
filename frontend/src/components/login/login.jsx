import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  function managePasswordState() {
    setShowPassword(!showPassword);
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.formInput}
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.formInput}
              id="password"
              placeholder="Enter your password"
            />
            <span className={styles.icon}>
              {showPassword ? (
                <GoEye onClick={managePasswordState} />
              ) : (
                <GoEyeClosed onClick={managePasswordState} />
              )}
            </span>
          </div>
          <button type="submit" className={styles.loginButton}>
            <AiOutlineLogin />
            Login
          </button>
          <Link to="/register" className={styles.signupLink}>
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
