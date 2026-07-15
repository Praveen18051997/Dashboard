import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import Mail from "./pages/Mail";
import Chat from "./pages/Chat";
import Projects from "./pages/Projects";
import FileManager from "./pages/FileManager";
import Notes from "./pages/Notes";
import Contacts from "./pages/Contacts";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/task"
        element={
          <ProtectedRoute>
            <Task />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

      <Route
        path="/ecommerce"
        element={
          <ProtectedRoute>
            <Ecommerce />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mail"
        element={
          <ProtectedRoute>
            <Mail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      <Route
        path="/file-manager"
        element={
          <ProtectedRoute>
            <FileManager />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contacts"
        element={
          <ProtectedRoute>
            <Contacts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;