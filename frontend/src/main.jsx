import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/login/login.jsx";
import Registration from "./components/registration/registration.jsx";
import UserProvider from "./context/userProvider.jsx";
import AuthProvider from "./context/authProvider.jsx";
import Hero from "./components/hero/Hero.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <React.StrictMode>
        <RouterProvider router={Router} />
      </React.StrictMode>
    </UserProvider>
  </AuthProvider>
);
