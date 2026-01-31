import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3f8cff" },
    secondary: { main: "#1f9ec1" },
    background: {
      default: "#0a0a0a",
      paper: "#0f1116",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c7d2fe",
    },
    divider: "#1f2330",
  },
  typography: {
    fontFamily: "'Outfit', 'Helvetica', 'Arial', sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 999,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderColor: "#1f2330",
        },
      },
    },
  },
});

export default theme;
