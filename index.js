const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

function handleListening() {
  console.log("http://localhost:3000");
}

app.listen(3000, handleListening);
