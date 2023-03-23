import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
