import UserContext from "./userContext";
import AuthContext from "./authContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function UserProvider({ children }) {
  const { serverURL } = useContext(AuthContext);
  const [user, setUser] = useState("");
  async function getCurrentUser() {
    //console.log()
    try {
      const response = await axios.get(
        `${serverURL}/api/user/getUser`,
      );
      setUser(response.data);
      //console.log(response.data);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  }
  useEffect(() => {
    getCurrentUser();
  }, []);
  let value = {
    user,
    setUser,
    getCurrentUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
export default UserProvider;
