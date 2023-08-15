import React from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from "./components/layout/Header";
import BasicCard from "./components/Card";
import Footer from "./components/layout/Footer";


const theme = createTheme();


function App() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      <Footer/>
      </ThemeProvider>
  );
}

export default App;
