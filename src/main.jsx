import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { CalendarProvider } from "./context/CalendarContext";
import { SidebarProvider } from "./context/SidebarContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>

        <CalendarProvider>

          <SidebarProvider>

            <App />

            <Toaster position="top-center" />

          </SidebarProvider>

        </CalendarProvider>

      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>
);