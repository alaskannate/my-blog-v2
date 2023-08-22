import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from "./layout/Header";
import Card from "./components/Card"; 
import Footer from "./layout/Footer";
import notes from "./notes"; 


const theme = createTheme();

function App() {

    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <div className="body-box">
      {notes.map(((notes) => 
        <Card 
          key={notes.id}
          title={notes.title}
          content = {notes.content} 
        />
  
        ))};
      </div>
      <Footer/>
    </ThemeProvider>
  );
}


export default App;
