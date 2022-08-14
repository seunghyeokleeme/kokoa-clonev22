import express from "express";

const roomRouter = express.Router();

roomRouter.get("/", (req, res) => res.send("<h1>채팅</h1>"));
roomRouter.get("/:id(\\d+)", (req, res) =>
  res.send(`<h1>방 번호: ${req.params.id} 채팅</h1>`)
);
roomRouter.get("/:id(\\d+)/chat", (req, res) =>
  res.send(`<h1>채팅 방:${req.params.id} - 채팅 보내기</h1>`)
);
roomRouter.get("/add", (req, res) => res.send("<h1>채팅방 추가</h1>"));

export default roomRouter;
