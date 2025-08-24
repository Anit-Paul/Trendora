import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ServerProvider from "./store/serverProvider";
import AdminProvider from "./store/adminProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServerProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </ServerProvider>
  </BrowserRouter>
);
