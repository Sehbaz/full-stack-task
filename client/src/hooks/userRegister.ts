import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../store/services/userApi";
import { useState } from "react";

export const useRegister = () => {
  // hooks
  const navigate = useNavigate();
  const [createUser, { isLoading }] = useCreateUserMutation();

  // states
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [customError, setCustomError] = useState("test notification");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // methods
  const submitRegister = async () => {
    if (newUser.confirmPassword !== newUser.password) {
      setCustomError("Passwords do not match");
      setOpenNotification(true);
      return;
    }

    try {
      const response = await createUser(newUser).unwrap();
      localStorage.setItem("token", response.user.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Registration failed:", error);

      const message =
        error?.data?.error ||
        error?.error ||
        error?.message ||
        "Unknown error occurred";

      setCustomError(message);
      setOpenNotification(true);
    }
  };

  return {
    isLoading,
    submitRegister,
    emailError,
    passwordError,
    openNotification,
    customError,
    confirmPasswordError,
    newUser,
    setEmailError,
    setPasswordError,
    setOpenNotification,
    setCustomError,
    setConfirmPasswordError,
    setNewUser,
  };
};
