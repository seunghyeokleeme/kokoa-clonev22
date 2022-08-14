import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("<h1>사용자 목록</h1>"));
userRouter.get("/:id(\\d+)", (req, res) =>
  res.send(`<h1>${req.params.id} 유저</h1>`)
);
userRouter.get("/edit", (req, res) => res.send(`<h1>나의 프로필 편집</h1>`));
userRouter.get("/remove", (req, res) => res.send("<h1>회원 탈퇴</h1>"));

export default userRouter;
