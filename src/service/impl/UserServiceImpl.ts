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
}
