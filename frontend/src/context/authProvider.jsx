import React from "react";
import AuthContext from "./authContext";

function AuthProvider({ children }) {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const value = { serverURL };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
