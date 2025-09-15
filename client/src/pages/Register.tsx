import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";
import { useState } from "react";
import { useCreateUserMutation } from "../services/userApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [customError, setCustomError] = useState("test notification");

  const submitRegister = async () => {
    try {
      await createUser(newPost).unwrap();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Registration failed:", error);

      const message =
        error?.data?.error ||
        error?.error ||
        error?.message ||
        "Unknown error occurred";

      setCustomError(message);
      setOpen(true);
    }
  };

  const [createUser, { data, isLoading }] = useCreateUserMutation();

  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Simple account creation."
      gradient="radial-gradient(circle at 60% 40%, #fde1c8 0%, #faa974 50%, #fb8585 100%)"
      accentColor="#fb8585"
    >
      <Stack spacing={2} mb={2}>
        <TextField
          id="name"
          label="Your name"
          aria-label="name"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <TextField
          id="email"
          label="Your email"
          aria-label="email"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          id="user-password"
          label="Password"
          type="password"
          aria-label="user-password"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <TextField
          id="user-confirm-password"
          label="Confirm password"
          type="password"
          aria-label="user-confirm-password"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setNewPost((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
        />
        {!isLoading ? (
          <Button
            id="register"
            variant="contained"
            fullWidth
            size="large"
            aria-label="register"
            sx={{
              boxShadow: 10,
              py: 1.3,
              backgroundColor: "black",
              color: "white",
            }}
            onClick={submitRegister}
            disabled={isLoading}
          >
            Create account
          </Button>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="inherit" />
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 2 }}>
        <Typography align="center" variant="body2" color="text.secondary">
          or
        </Typography>
      </Divider>
      <Typography align="center" variant="body2" color="text.secondary">
        Already have an account?{" "}
        <span
          style={{ color: "#fb8585", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </Typography>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={customError}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </AuthLayout>
  );
};

export default Register;
