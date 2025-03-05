import { User } from "../model/user.entity";

export interface IUserService {
  createUser(user: User): User;
  getAllUser(): User[];
  getUserById(id: number): User;
  updateUser(id: number, user: User): User;
  deleteUser(id: number): void;
}
