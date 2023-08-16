import React from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from "./components/layout/Header";
import Card from "./components/Card"
import Footer from "./components/layout/Footer";
import notes from "./notes"


const theme = createTheme();


function App() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <div className="body-box">
      <Card
        title={notes[0].title}
        content={notes[0].content}
        userName={notes[0].userName}
        />
        <Card
        title={notes[1].title}
        content={notes[1].content}
        userName={notes[1].userName}
        />
        <Card
        title={notes[2].title}
        content={notes[2].content}
        userName={notes[2].userName}
        />
      </div>
      <Footer/>
      </ThemeProvider>
  );
}

export default App;
