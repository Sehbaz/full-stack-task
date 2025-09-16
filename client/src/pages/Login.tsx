// react
import { useNavigate } from "react-router-dom";

// MUI
import {
  Box,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

// components
import AuthLayout from "../components/auth/AuthLayout";

// hooks
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  // hooks
  const {
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
  } = useLogin();
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Log in"
      accentColor="#5a9cfb"
      subtitle="Login to keep your projects flowing."
      gradient="radial-gradient(circle at 30% 30%, #a6cdfb, #5a9cfb, #1d5edb)"
    >
      <Stack spacing={2} mb={2}>
        <TextField
          required
          fullWidth
          label="Your email"
          aria-label="email"
          variant="outlined"
          error={emailError}
          value={user.email}
          helperText={emailError ? "Please enter a valid email" : ""}
          inputProps={{
            type: "email",
          }}
          onChange={(e) => {
            setEmailError(!e.target.validity.valid);
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          error={passwordError}
          aria-label="user-password"
          value={user.password}
          helperText={
            passwordError ? "Password must be minimum 8 character" : ""
          }
          inputProps={{ minLength: 8 }}
          onChange={(e) => {
            setPasswordError(!e.target.validity.valid);
            setUser((prev) => ({ ...prev, password: e.target.value }));
          }}
        />

        {!isLoading ? (
          <Button
            fullWidth
            size="large"
            aria-label="login"
            variant="contained"
            onClick={submitLogin}
            disabled={emailError || passwordError}
            sx={{
              py: 1.3,
              color: "white",
              boxShadow: 10,
              backgroundColor: "black",
            }}
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
            onClick={() => navigate("/register")}
            style={{ color: "#fb8585", cursor: "pointer" }}
          >
            Register
          </span>
        </Typography>
      </Stack>
      <Snackbar
        message={customError}
        open={openNotification}
        autoHideDuration={2000}
        onClose={() => setOpenNotification(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </AuthLayout>
  );
};

export default Login;
