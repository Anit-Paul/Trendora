import "bootstrap/dist/css/bootstrap.min.css";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./registration.module.css";
import Password from "../password/password";
import { FcGoogle } from "react-icons/fc";

function Registration() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h4 className={styles.loginTitle}>Register Yourself!</h4>
        <div className={styles.auth}>
          <FcGoogle />
          <span>Sign up with Google</span>
        
        </div>
        <p>Or</p>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="text" className={styles.formLabel}>
              Full Name
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="email"
              placeholder="Enter your Full Name"
            />
          </div>
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
          <Password />
          <button type="submit" className={styles.loginButton}>
            <IoCreateOutline />
            Create Account
          </button>
          <Link to="/login" className={styles.signupLink}>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Registration;
