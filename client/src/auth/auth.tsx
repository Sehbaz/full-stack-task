// react
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// store
import type { RootState } from "../store/store";

const auth = () => {
  // hooks
  const accessToken = useSelector((state: RootState) => state.auth.user);

  const ProtectedRoute = () => {
    if (!accessToken?.token) return <Navigate to="/login" replace />;
    return <Outlet />;
  };

  const PublicRoute = () => {
    if (accessToken?.token) return <Navigate to="/dashboard" replace />;
    return <Outlet />;
  };

  return {
    ProtectedRoute,
    PublicRoute,
  };
};

export default auth;
