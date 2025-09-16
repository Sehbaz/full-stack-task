// react
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Box, Button, Typography } from "@mui/material";

const Dashboard = () => {
  // hooks
  const navigate = useNavigate();

  // methods
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);

  const rawUser = localStorage.getItem("user");

  // memos
  const user = useMemo(() => {
    try {
      return rawUser ? JSON.parse(rawUser) : null;
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
      return null;
    }
  }, [rawUser]);

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
      <Typography variant="h1" component="h2">
        Welcome {user.name}
      </Typography>

      <Button
        size="large"
        onClick={logout}
        aria-label="login"
        variant="contained"
        sx={{
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
