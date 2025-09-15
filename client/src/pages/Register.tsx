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

const Register = () => (
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
        borderRadius: 2,
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
              "radial-gradient(circle at 60% 40%, #fde1c8 0%, #faa974 50%, #fb8585 100%)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Cromwell
          </Typography>
          <Typography variant="body1" mt={1}>
            Simple account creation.
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
                    color: "#fb8585",
                    fontSize: 60,
                    verticalAlign: "middle",
                  }}
                >
                  *
                </span>{" "}
                Create an account
              </Typography>
            </Box>
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
          </Container>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default Register;
