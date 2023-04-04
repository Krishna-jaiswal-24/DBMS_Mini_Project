const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/rent-property", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/rentProperty.html"));
});

app.get('/staff-registration',(req,res)=>{
  res.sendFile(path.join(__dirname, "../public/staffRegistration.html"))
})

app.get('/client-registration',(req,res)=>{
  res.sendFile(path.join(__dirname, "../public/clientRegistration.html"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
