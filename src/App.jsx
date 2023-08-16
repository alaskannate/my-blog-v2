import React from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from "./components/layout/Header";
import PageBody from "./components/layout/PageBody";
import Footer from "./components/layout/Footer";


const theme = createTheme();


function App() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <PageBody/>
      <Footer/>
      </ThemeProvider>
  );
}

export default App;
