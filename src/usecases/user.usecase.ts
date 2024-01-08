import { User } from './../interfaces/user.interface';
import { UserCreate, UserRepository } from "../interfaces/user.interface"
import { UserRepositoryPrisma } from "../repositories/user.repository"

class UserUseCase {

  private UserRepository : UserRepositoryPrisma


  constructor(){
    this.UserRepository = new UserRepositoryPrisma()
  }

  async create({name, email} : UserCreate): Promise<User>{

  }
}