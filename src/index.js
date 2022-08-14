import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.get("/", function (req, res) {
  res.send("Kakao Clone");
});

app.listen(PORT, () => console.log("http://localhost:4000"));
