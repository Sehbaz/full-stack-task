import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      minHeight="100vh"
      bgcolor="#e4e4e4ff"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <Typography variant="h1" component="h2">
        Welcome
      </Typography>
    </Box>
  );
};

export default Dashboard;
