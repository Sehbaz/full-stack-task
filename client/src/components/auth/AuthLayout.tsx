// react
import type { ReactNode } from "react";

// MUI
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  gradient: string;
  accentColor: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  gradient,
  accentColor,
  children,
}: AuthLayoutProps) => (
  <Box
    px={2}
    display="flex"
    minHeight="100vh"
    alignItems="center"
    bgcolor="#e4e4e4ff"
    justifyContent="center"
  >
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 600,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Grid>
        <Grid
          sx={{
            color: "white",
            display: "flex",
            p: { xs: 3, md: 6 },
            background: gradient,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Cromwell
          </Typography>
          <Typography variant="body1" mt={1}>
            {subtitle}
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            bgcolor: "#fff",
            p: { xs: 4, md: 6 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth={false} disableGutters sx={{ p: 0 }}>
            <Box mb={3}>
              <Typography
                mb={1}
                variant="h2"
                fontWeight={700}
                fontSize={{ xs: "1.6rem", md: "2rem" }}
              >
                <span
                  style={{
                    fontSize: 60,
                    color: accentColor,
                    verticalAlign: "middle",
                  }}
                >
                  *
                </span>{" "}
                {title}
              </Typography>
            </Box>
            <Stack spacing={2} mb={2}>
              {children}
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default AuthLayout;
