import "bootstrap/dist/css/bootstrap.min.css";
import { IoCreateOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registration.module.css";
import Password from "../password/password";
import { FcGoogle } from "react-icons/fc";
import { useState, useContext } from "react";
import AuthContext from "../../context/authContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../utils/firebase";
import UserContext from "../../context/userContext";

function Registration() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { serverURL } = useContext(AuthContext);
  const {getCurrentUser}=useContext(UserContext)
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverURL}/api/auth/register`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      ); //for sending the credentials like cookies, authorization headers with req as we using different port/domain for frontend and backend
      if (response.status === 200 || response.status === 201) {
        setEmail("");
        setName("");
        setPassword("");
        getCurrentUser()
        Navigate("/");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleSignUp = async () => {
    try{
      const response=await signInWithPopup(auth, provider);
      const user=response.user;
      const name=user.displayName;
      const email=user.email;
      const res = await axios.post(
        `${serverURL}/api/auth/googleRegister`,
        {
          name,
          email,
        },
        { withCredentials: true }
      );
      if (res.status === 200 || res.status === 201) {
        getCurrentUser()
        Navigate("/");
      } else {
        console.error("Registration failed:", res.data.message);
      }
    }catch (error) {
      console.error("Google sign-up failed:", error);
    }
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h4 className={styles.loginTitle}>Register Yourself!</h4>
        <div className={styles.auth} onClick={handleGoogleSignUp}>
          <FcGoogle />
          <span>Sign up with Google</span>
        </div>
        <p>Or</p>
        <form onSubmit={handleRegistration}>
          <div className={styles.formGroup}>
            <label htmlFor="text" className={styles.formLabel}>
              Full Name
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="name"
              placeholder="Enter your Full Name"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Password onChange={(e) => setPassword(e.target.value)} />
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
