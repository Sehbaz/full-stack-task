import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useLoginUserMutation } from "../services/userApi";

const Login = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [newPost, setNewPost] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { error: mutationError, isLoading }] =
    useLoginUserMutation();

  const [customError, setCustomError] = useState("test notification");

  const submitLogin = async () => {
    try {
      const response = await loginUser(newPost).unwrap();
      localStorage.setItem("token", response.token);

      navigate("/dashboard");
    } catch {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (mutationError) {
      console.error("login failed:", mutationError);
      const message =
        (mutationError as any)?.data?.error ||
        (mutationError as any)?.error ||
        (mutationError as any)?.message ||
        "Unknown error occurred";

      setCustomError(message);
    }
  }, [mutationError]);

  return (
    <AuthLayout
      title="Log in"
      subtitle="Login to keep your projects flowing."
      gradient="radial-gradient(circle at 30% 30%, #a6cdfb, #5a9cfb, #1d5edb)"
      accentColor="#5a9cfb"
    >
      <Stack spacing={2} mb={2}>
        <TextField
          label="Your email"
          aria-label="email"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          label="Password"
          type="password"
          aria-label="user-password"
          variant="outlined"
          onChange={(e) => {
            setNewPost((prev) => ({ ...prev, password: e.target.value }));
          }}
          fullWidth
        />

        {!isLoading ? (
          <Button
            variant="contained"
            fullWidth
            size="large"
            aria-label="login"
            sx={{
              boxShadow: 10,
              py: 1.3,
              backgroundColor: "black",
              color: "white",
            }}
            onClick={submitLogin}
          >
            Log in
          </Button>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="inherit" />
          </Box>
        )}

        <Divider sx={{ my: 2 }}>
          <Typography align="center" variant="body2" color="text.secondary">
            or
          </Typography>
        </Divider>
        <Typography align="center" variant="body2" color="text.secondary">
          Already have an account?{" "}
          <span
            style={{ color: "#fb8585", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </Typography>
      </Stack>
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

export default Login;
