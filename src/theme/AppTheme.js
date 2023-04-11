import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./";
import { CssBaseline } from "@mui/material";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
