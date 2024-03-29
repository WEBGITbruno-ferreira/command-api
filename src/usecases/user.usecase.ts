import { User } from './../interfaces/user.interface';
import { UserCreate, UserRepository } from "../interfaces/user.interface"
import { UserRepositoryPrisma } from "../repositories/user.repository"

export class UserUseCase {

  private UserRepository : UserRepository


  constructor(){
    this.UserRepository = new UserRepositoryPrisma()
  }

  async create({name, email} : UserCreate): Promise<User>{
    const verifyIfexists = await this.UserRepository.findByEmail(email)

    if (verifyIfexists) {

      throw new Error('User Already exists')
      
    }

    const result = await this.UserRepository.create({
      email, name
    });

    return result

  }
}