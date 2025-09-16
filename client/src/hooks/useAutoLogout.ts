// react
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// libraries
import { jwtDecode } from "jwt-decode";

// store
import { logout } from "../store/features/auth/authSlice";

export function useAutoLogout(token: string | null) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      const expiry = exp * 1000 - Date.now();

      if (expiry <= 0) {
        dispatch(logout());
        navigate("/login");
        return;
      }

      const timeout = setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, expiry);

      return () => clearTimeout(timeout);
    } catch (e) {
      dispatch(logout());
      navigate("/login");
    }
  }, [token]);
}
