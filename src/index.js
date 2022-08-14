import express from "express";

const PORT = 4000;

const app = express();

app.get("/", function (req, res) {
  res.send("Kakao Clone");
});

app.listen(PORT, () => console.log("http://localhost:4000"));
