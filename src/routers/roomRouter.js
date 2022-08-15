import express from "express";
import { add, room, rooms, sendChat } from "../controllers/roomController";

const roomRouter = express.Router();

roomRouter.get("/", rooms);
roomRouter.get("/:id(\\d+)", room);
roomRouter.get("/:id(\\d+)/chat", sendChat);
roomRouter.get("/add", add);

export default roomRouter;
