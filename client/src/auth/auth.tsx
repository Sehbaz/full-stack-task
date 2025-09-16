// react
import { Outlet, Navigate } from "react-router-dom";

const auth = () => {
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

  return {
    ProtectedRoute,
    PublicRoute,
  };
};

export default auth;
