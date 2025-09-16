// react
import { useNavigate } from "react-router-dom";

// MUI
import {
  Box,
  Stack,
  Button,
  Divider,
  Snackbar,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

// components
import AuthLayout from "../components/auth/AuthLayout";

// hooks
import { useRegister } from "../hooks/userRegister";

const Register = () => {
  // hooks
  const navigate = useNavigate();
  const {
    isLoading,
    emailError,
    passwordError,
    openNotification,
    customError,
    confirmPasswordError,
    newUser,
    setEmailError,
    setPasswordError,
    setOpenNotification,
    setConfirmPasswordError,
    setNewUser,
    submitRegister,
  } = useRegister();

  return (
    <AuthLayout
      accentColor="#fb8585"
      title="Create an account"
      subtitle="Simple account creation."
      gradient="radial-gradient(circle at 60% 40%, #fde1c8 0%, #faa974 50%, #fb8585 100%)"
    >
      <Stack spacing={2} mb={2}>
        <TextField
          required
          fullWidth
          id="name"
          label="Your name"
          aria-label="name"
          variant="outlined"
          onChange={(e) => {
            setNewUser((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Your email"
          aria-label="email"
          variant="outlined"
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ""}
          inputProps={{
            type: "email",
          }}
          onChange={(e) => {
            setEmailError(!e.target.validity.valid);
            setNewUser((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          id="user-password"
          variant="outlined"
          aria-label="user-password"
          error={passwordError}
          value={newUser.password}
          inputProps={{ minLength: 8 }}
          helperText={
            passwordError ? "Password must be minimum 8 character" : ""
          }
          onChange={(e) => {
            setPasswordError(!e.target.validity.valid);
            setNewUser((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <TextField
          required
          fullWidth
          type="password"
          variant="outlined"
          label="Confirm password"
          id="user-confirm-password"
          aria-label="user-confirm-password"
          value={newUser.confirmPassword}
          error={confirmPasswordError}
          inputProps={{ minLength: 8 }}
          helperText={
            passwordError ? "Password must be minimum 8 character" : ""
          }
          onChange={(e) => {
            setConfirmPasswordError(!e.target.validity.valid);
            setNewUser((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
        />
        {!isLoading ? (
          <Button
            fullWidth
            size="large"
            id="register"
            variant="contained"
            aria-label="register"
            disabled={isLoading}
            onClick={submitRegister}
            sx={{
              py: 1.3,
              boxShadow: 10,
              color: "white",
              backgroundColor: "black",
            }}
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
          onClick={() => navigate("/login")}
          style={{ color: "#fb8585", cursor: "pointer" }}
        >
          Log in
        </span>
      </Typography>
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

export default Register;
