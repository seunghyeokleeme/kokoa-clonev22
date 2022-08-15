import express from "express";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("<h1>코코아톡 Home</h1>"));
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
