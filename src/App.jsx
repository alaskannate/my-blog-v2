import React from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from "./components/layout/Header";
import Card from "./components/Card"
import Footer from "./components/layout/Footer";
import notes from "./notes"


const theme = createTheme();

function createCard(notes) {
  return <Card 
  id={notes.id}
  key={notes.id}
  title={notes.title}
  content = {notes.content} 
  userName = {notes.userName}
   />
}

function App() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <div className="body-box">
      {notes.map(createCard)}
      </div>
      <Footer/>
      </ThemeProvider>
  );
}

export default App;
