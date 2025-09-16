// react
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

// api
import { useLoginUserMutation } from "../store/services/userApi";
import { setCredentials } from "../store/features/auth/authSlice";

export const useLogin = () => {
  // states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [customError, setCustomError] = useState("test notification");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { error: mutationError, isLoading }] =
    useLoginUserMutation();

  // methods
  const submitLogin = useCallback(async () => {
    try {
      const response = await loginUser(user).unwrap();
      dispatch(setCredentials(response));
      navigate("/dashboard");
    } catch {
      setOpenNotification(true);
    }
  }, [loginUser, useRoutes, navigate, user]);

  // effects
  useEffect(() => {
    if (!mutationError) return;
    console.error("login failed:", mutationError);
    const message =
      (mutationError as any)?.data?.error ||
      (mutationError as any)?.error ||
      (mutationError as any)?.message ||
      "Unknown error occurred";

    setCustomError(message);
  }, [mutationError]);

  return {
    user,
    setUser,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    openNotification,
    setOpenNotification,
    customError,
    submitLogin,
    isLoading,
  };
};
