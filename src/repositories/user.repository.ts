import { User, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository{
  async create(data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

}


export {UserRepositoryPrisma}