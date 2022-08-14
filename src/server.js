import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import roomRouter from "./routers/roomRouter";
import viewRouter from "./routers/viewRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/rooms", roomRouter);
app.use("/views", viewRouter);

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
