import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import { useContext } from "react";
import UserContext from "./context/userContext";
import Login from "./components/login/login.jsx";
import Hero from "./components/hero/Hero.jsx";
import Collections from "./components/collections/collections.jsx";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hero" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/hero" element={<Hero />} />
        <Route path="/collections" element={<Collections />} />
      </Route>
    </Routes>
  );
}
export default App;
