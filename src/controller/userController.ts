import { Request, Response } from "express";
import { IUserService } from "../service/UserService";
import { User } from "../model/user.entity";
import {
  IResponse,
  IResponseMessage,
} from "../utils/types/interface/IResponse.interface";
import { ResponseDto, ResponseMessageWrapper } from "../dto/response.dto";

export class UserController {
  constructor(private readonly userService: IUserService) {}

  public createUserHandler(req: Request, res: Response): void {
    try {
      const newUser: User = new User(req.body);
      const createdUser: User = this.userService.createUser(newUser);

      const response: ResponseDto<User> = new ResponseDto<User>(
        201,
        true,
        "User created successfully",
        createdUser
      );

      res.status(201).send(response);
    } catch (error) {
      const response: ResponseMessageWrapper = new ResponseMessageWrapper(
        400,
        false,
        (error as Error).message
      );

      res.status(400).send(response);
    }
  }

  public getAllUserHandler(req: Request, res: Response): void {
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

  public getUserByIdHandler(req: Request, res: Response): void {
    try {
      const id: number = parseInt(req.params.id);
      const user: User = this.userService.getUserById(id);

      const response: IResponse<User> = {
        code: 200,
        status: true,
        message: "User fetched successfully",
        data: user,
      };

      res.status(200).send(response);
    } catch (error) {
      const response: IResponseMessage = {
        code: 400,
        status: false,
        message: (error as Error).message,
      };

      res.status(404).send(response);
    }
  }

  public updateUserHandler(req: Request, res: Response): void {
    try {
      const id: number = parseInt(req.params.id);
      const updatedUser: User = new User(req.body);
      const user: User = this.userService.updateUser(id, updatedUser);

      const response: IResponse<User> = {
        code: 200,
        status: true,
        message: "User updated successfully",
        data: user,
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

  public deleteUserHandler(req: Request, res: Response): void {
    try {
      const id: number = parseInt(req.params.id);
      this.userService.deleteUser(id);

      const response: IResponseMessage = {
        code: 200,
        status: true,
        message: "User deleted successfully",
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
