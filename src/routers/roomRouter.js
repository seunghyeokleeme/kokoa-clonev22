import express from "express";

const roomRouter = express.Router();

roomRouter.get("/", (req, res) => res.send("<h1>채팅</h1>"));

export default roomRouter;
