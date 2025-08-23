import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServerProvider from "./store/serverProvider.jsx";
import Login from "./components/login/login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <h1>home</h1>,
      },
      {
        path: "/order",
        element: <h1>order</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ServerProvider>
      <RouterProvider router={router} />
    </ServerProvider>
  </StrictMode>
);
