import { Request, Response } from "express";
import { IUserService } from "../service/UserService";
import { User } from "../model/user.entity";
import {
  IResponse,
  IResponseMessage,
} from "../utils/types/interface/IResponse.interface";

export class UserController {
  constructor(private userService: IUserService) {}

  public createUserHandler(req: Request, res: Response) {
    try {
      const newUser: User = new User(req.body);
      const createdUser: User = this.userService.createUser(newUser);

      const response: IResponse<User> = {
        code: 201,
        status: true,
        message: "User created successfully",
        data: createdUser,
      };

      res.status(201).send(response);
    } catch (error) {
      const response: IResponseMessage = {
        code: 400,
        status: false,
        message: (error as Error).message,
      };

      res.status(400).send(response);
    }
  }

  public getAllUserHandler(req: Request, res: Response) {
    try {
      const response: IResponse<User[]> = {
        code: 200,
        status: true,
        message: "Users fetched successfully",
        data: this.userService.getAllUser(),
      };

      res.status(200).send(response);
    } catch (error) {
      const response: IResponseMessage = {
        code: 400,
        status: false,
        message: (error as Error).message,
      };

      res.status(400).send(response);
    }
  }
}
