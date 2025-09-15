import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => (
  <Box
    minHeight="100vh"
    bgcolor="#e4e4e4ff"
    display="flex"
    justifyContent="center"
    alignItems="center"
    px={2}
  >
    <Paper
      elevation={3}
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        maxWidth: 600,
        width: "100%",
      }}
    >
      <Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: { xs: 3, md: 6 },
            background:
              "radial-gradient(circle at 30% 30%, #a6cdfb, #5a9cfb, #1d5edb)",
            color: "white",
          }}
        >
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Cromwell
          </Typography>
          <Typography variant="body1" mt={1}>
            Login to keep your projects flowing.
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 4, md: 6 },
            bgcolor: "#fff",
          }}
        >
          <Container maxWidth={false} disableGutters sx={{ p: 0 }}>
            <Box mb={3}>
              <Typography
                variant="h2"
                fontWeight={700}
                fontSize={{ xs: "1.6rem", md: "2rem" }}
                mb={1}
              >
                <span
                  style={{
                    color: "#5a9cfb",
                    fontSize: 60,
                    verticalAlign: "middle",
                  }}
                >
                  *
                </span>{" "}
                Log in
              </Typography>
            </Box>
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
          </Container>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default Login;
