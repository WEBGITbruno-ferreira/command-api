import { UserRepository } from './../interfaces/user.interface';
import { ContactRepository, ContactCreate } from './../interfaces/contacts.interface';
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository";
import { UserRepositoryPrisma } from '../repositories/user.repository';

export class ContactUseCase {

  private contactRepository : ContactRepository
  private userRepository : UserRepository
  



  constructor(){
    this.contactRepository = new ContactsRepositoryPrisma
    this.userRepository = new UserRepositoryPrisma
  }

  async create ({email, name, phone, userEmail} : ContactCreate){

    const user = await this.userRepository.findByEmail(userEmail)

    if (!user) {
      throw new Error("User not found");     
    }

    
    const verifyIfExistContact  = await this.contactRepository.findByEmailOrPhone(userEmail,phone )

    if (verifyIfExistContact) {
      throw new Error("Contact already exists");
      
    }


    const contact = await this.contactRepository.create({
      email, name, phone, userId : user.id
    })


    return contact

  }

  async listAllContacts (userEmail : string) {

    const user = await this.userRepository.findByEmail(userEmail)

    if(!user){
      throw new Error("Usuário não autenticado");
      
    }


    const contacts = await this.contactRepository.findAllContacts(user.id)

    return contacts

  }

}