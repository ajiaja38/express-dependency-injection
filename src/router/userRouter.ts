import express from "express";
import { IUserService } from "../service/UserService";
import { UserServiceImpl } from "../service/impl/UserServiceImpl";
import { UserController } from "../controller/userController";

export const userRouter = (userRouter: express.Router) => {
  const userService: IUserService = new UserServiceImpl();
  const userController: UserController = new UserController(userService);

  userRouter.post(
    "/user",
    userController.createUserHandler.bind(userController)
  );
  userRouter.get(
    "/users",
    userController.getAllUserHandler.bind(userController)
  );
  userRouter.get(
    "/user/:id",
    userController.getUserByIdHandler.bind(userController)
  );
  userRouter.put(
    "/user/:id",
    userController.updateUserHandler.bind(userController)
  );
  userRouter.delete(
    "/user/:id",
    userController.deleteUserHandler.bind(userController)
  );
};
