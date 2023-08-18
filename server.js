import express from "express";
import ejs from "ejs";

const app =  express() 

app.use(express.static("public"));
app.set('view engine', 'ejs');





//APPLICATION LOGIC

app.get("/", (req, res) => {
    res.render("home",)
  });


app.listen(3000, () => {
    console.log("The server is running on port 3000")
})