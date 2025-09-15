// react dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// views
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("token");
  if (!accessToken) return <Navigate to="/login" replace />;
  return <Outlet />;
};

const PublicRoute = () => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
};
/*
 * AppRoutes centralized entire app routes
 */
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Redirect all unknown paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
