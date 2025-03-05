import { User } from "../model/user.entity";

export interface IUserService {
  createUser(user: User): User;
  getAllUser(): User[];
}
