import { Button, Stack, TextField } from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";

const Register = () => (
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
      />
      <TextField
        id="email"
        label="Your email"
        aria-label="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="user-password"
        label="Password"
        type="password"
        aria-label="user-password"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="user-confirm-password"
        label="Confirm password"
        type="password"
        aria-label="user-confirm-password"
        variant="outlined"
        fullWidth
      />
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
      >
        Create account
      </Button>
    </Stack>
  </AuthLayout>
);

export default Register;
