import { Box, Button, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      minHeight="100vh"
      bgcolor="#e4e4e4ff"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <Typography variant="h1" component="h2">
        Welcome
      </Typography>

      <Button
        variant="contained"
        size="large"
        aria-label="login"
        sx={{
          boxShadow: 10,
          py: 1.3,
          px: 6.3,

          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => (window.location.href = "/login")}
      >
        Log out
      </Button>
    </Box>
  );
};

export default Dashboard;
