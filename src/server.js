import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);

app.get("/rooms", function (req, res) {
  res.send("Kakao Chat Room");
});
app.get("/views", function (req, res) {
  res.send("Kakao Views list");
});
app.get("/shoppings", function (req, res) {
  res.send("Kakao Shopping nav");
});

app.get("/mores", function (req, res) {
  res.send("Kakao Mores nav");
});
app.get("/settings", function (req, res) {
  res.send("Kakao Settings nav");
});

app.listen(PORT, () =>
  console.log(`🚀 Kokoa-clone app listening on port http://localhost:${PORT}`)
);
