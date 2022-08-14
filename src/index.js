import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!!!");
});

function handleListening() {
  console.log("http://localhost:4000");
}

app.listen(4000, handleListening);
