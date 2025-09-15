import AppRoutes from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Fira Code, monospace",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
