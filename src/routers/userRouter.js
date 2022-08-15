import express from "express";
import {
  editProfile,
  removeUser,
  user,
  users,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/:id(\\d+)", user);
userRouter.get("/edit", editProfile);
userRouter.get("/remove", removeUser);

export default userRouter;
