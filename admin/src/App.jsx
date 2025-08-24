import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./components/login/login";
import adminContext from "./store/admin";

function App() {
  const { admin } = useContext(adminContext);

  return !admin ? (
    <Login />
  ) : (
    <Routes>
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/add" element={<h1>Add</h1>} />
      <Route path="/list" element={<h1>List</h1>} />
      <Route path="/order" element={<h1>Order</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
