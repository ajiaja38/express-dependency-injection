import { users } from "../../data";
import { User } from "../../model/user.entity";
import { IUserService } from "../UserService";

export class UserServiceImpl implements IUserService {
  public createUser(user: User): User {
    users.forEach((u: User) => {
      if (u.getEmail() === user.getEmail()) {
        throw new Error("User already exists");
      }
    });

    const getLastId = users.length ? users[users.length - 1].getId() : 0;
    user.setId(getLastId + 1);

    users.push(user);

    return users.filter((u: User) => u.getId() === user.getId())[0];
  }

  public getAllUser(): User[] {
    return users.reverse();
  }

  public getUserById(id: number): User {
    const user: User = users.find((u: User) => u.getId() === id)!;

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  public updateUser(id: number, user: User): User {
    const index: number = users.findIndex((u: User) => u.getId() === id);

    if (index === -1) {
      throw new Error("User not found");
    }

    user.setId(id);

    users[index] = user;

    return users[index];
  }

  public deleteUser(id: number): void {
    const index: number = users.findIndex((u: User) => u.getId() === id);

    if (index === -1) {
      throw new Error("User not found");
    }

    users.splice(index, 1);
  }
}
