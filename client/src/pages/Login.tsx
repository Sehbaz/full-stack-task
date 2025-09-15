import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";

const Login = () => (
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
      <Divider sx={{ my: 2 }}>
        <Typography align="center" variant="body2" color="text.secondary">
          or
        </Typography>
      </Divider>
      <Typography align="center" variant="body2" color="text.secondary">
        Already have an account?{" "}
        <span
          style={{ color: "#fb8585", cursor: "pointer" }}
          onClick={() => (window.location.href = "/register")}
        >
          Register
        </span>
      </Typography>
    </Stack>
  </AuthLayout>
);

export default Login;
