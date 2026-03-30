import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./styles/globals.css";

import LogRocket from "logrocket";

LogRocket.init(import.meta.env.VITE_LOGROCKET_ID);

LogRocket.init("t0fjzr/fionaspencer-site");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);