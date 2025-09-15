import { Button, Stack, TextField } from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";

const Login = () => (
  <AuthLayout
    title="Login"
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
      />
      <TextField
        label="Password"
        type="password"
        aria-label="user-password"
        variant="outlined"
        fullWidth
      />

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
      >
        Log in
      </Button>
    </Stack>
  </AuthLayout>
);

export default Login;
