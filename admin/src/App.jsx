import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Login from "./components/login/login";
import adminContext from "./store/admin";
import Nav from "./components/nav/nav";

// Layout component (Nav + Outlet)
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  const { admin } = useContext(adminContext);

  if (!admin) {
    return <Login />;
  }

  return (
    <Routes>
      {/* redirect root "/" to "/home" */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Protected layout with Nav */}
      <Route element={<Layout />}>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/add" element={<h1>Add</h1>} />
        <Route path="/list" element={<h1>List</h1>} />
        <Route path="/order" element={<h1>Order</h1>} />
      </Route>

      {/* login route stays accessible */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
