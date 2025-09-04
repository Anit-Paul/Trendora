import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Login from "./components/login/login";
import adminContext from "./store/admin";
import Nav from "./components/nav/nav";
import Sidebar from "./components/sidebar/sidebar";
import styles from "./components/sidebar/sidebar.module.css";
import Product from "./components/products/product";
import List from "./components/list/list";
// Layout component (Nav + Outlet)
function Layout() {
  return (
    <>
      <Nav />
      <Sidebar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
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
        <Route path="/add-items" element={<Product />} />
        <Route path="/list-items" element={<List />} />
        <Route path="/view-orders" element={<h1>Order</h1>} />
      </Route>

      {/* login route stays accessible */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
