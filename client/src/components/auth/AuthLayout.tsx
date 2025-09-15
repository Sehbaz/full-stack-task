import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

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
            background: gradient,
            color: "white",
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
                    color: accentColor,
                    fontSize: 60,
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
