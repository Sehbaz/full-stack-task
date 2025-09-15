import {
  Button,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AuthLayout from "../components/auth/AuthLayout";
import { useState } from "react";

const Register = () => {
  const [open, setOpen] = useState(false);

  const submitRegister = () => {
    setOpen(true);
    // navigate("/");
  };

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
          onClick={submitRegister}
        >
          Create account
        </Button>
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
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </span>
      </Typography>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Notification test"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </AuthLayout>
  );
};

export default Register;
