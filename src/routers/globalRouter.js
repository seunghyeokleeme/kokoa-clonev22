import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("<h1>코코아톡 Home</h1>"));
globalRouter.get("/join", (req, res) =>
  res.send("<h1>코코아톡 회원 가입</h1>")
);
globalRouter.get("/login", (req, res) =>
  res.send("<h1>코코아톡 로그인 창</h1>")
);

export default globalRouter;
