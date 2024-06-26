import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#8ce892]">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
