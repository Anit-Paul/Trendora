import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./password.module.css";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";

function Password({ onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  function managePasswordState() {
    setShowPassword(!showPassword);
  }
  return (
    <div className={styles.formGroup}>
      <label htmlFor="password" className={styles.formLabel}>
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        className={styles.formInput}
        id="password"
        placeholder="Enter your password"
        onChange={onChange}
      />
      <span className={styles.icon}>
        {showPassword ? (
          <GoEye onClick={managePasswordState} />
        ) : (
          <GoEyeClosed onClick={managePasswordState} />
        )}
      </span>
    </div>
  );
}
export default Password;
