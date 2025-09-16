// react
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// store
import type { RootState } from "../store/store";

// api
import { logout as logoutAction } from "../store/features/auth/authSlice";

const Dashboard = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  // methods
  const logout = useCallback(() => {
    dispatch(logoutAction());
    navigate("/login");
  }, [navigate]);

  return (
    <Box
      px={2}
      display="flex"
      minHeight="100vh"
      alignItems="center"
      bgcolor="#e4e4e4ff"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          textAlign: "center",
          maxWidth: "90%",
          wordBreak: "break-word",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Welcome, {user?.name}
      </Typography>

      <Button
        size="large"
        onClick={logout}
        aria-label="login"
        variant="contained"
        sx={{
          my: 3.2,
          py: 1.3,
          px: 6.3,
          color: "white",
          boxShadow: 10,
          backgroundColor: "black",
        }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default Dashboard;
