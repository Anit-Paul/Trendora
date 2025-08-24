// components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import adminContext from "./store/admin.jsx";

function ProtectedRoute() {
  const { admin } = useContext(adminContext);

  // If not logged in, redirect to login
  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  // Else render children (via Outlet)
  return <Outlet />;
}

export default ProtectedRoute;
