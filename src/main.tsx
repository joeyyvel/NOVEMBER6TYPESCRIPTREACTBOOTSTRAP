// import { StrictMode } from "react";
// import "./index.css";
// import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./router.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
