import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Segoe UI Symbol, Arial, sans-serif",
    },
});

export default theme;