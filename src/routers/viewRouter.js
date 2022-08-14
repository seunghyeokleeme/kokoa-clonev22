import express from "express";

const viewRouter = express.Router();

viewRouter.get("/", (req, res) => res.send("<h1>뷰</h1>"));

export default viewRouter;
