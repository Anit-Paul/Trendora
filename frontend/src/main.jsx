import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./context/userProvider.jsx";
import AuthProvider from "./context/authProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/productProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <ProductProvider>
      <BrowserRouter>
      <App></App>
      </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  </AuthProvider>
);
