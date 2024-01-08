import { prisma } from '../database/prisma-client';
import { Contact, ContactCreate, ContactCreateData, ContactRepository } from './../interfaces/contacts.interface';
export class ContactsRepositoryPrisma implements ContactRepository {

  async create(data: ContactCreateData): Promise<Contact> {
    const result = await prisma.contatcs.create({
      data : {
        email : data.email,
        name : data.name,
        phone : data.phone,
        userId: data.userId
      }
    })

    return result
  }


  async findByEmailOrPhone(email : string, phone : string): Promise<Contact | null> {
    const result = await prisma.contatcs.findFirst({
      where  : {
        OR : [{ email }, {phone}]
      }
    })


    return result || null
  }

  async findAllContacts(userId: string): Promise<Contact[]> {
    const result = await prisma.contatcs.findMany({
      where : { userId}

    })

    return result
  }

  async updateContact ({id,  name, email, phone} : Contact): Promise<Contact>{
    const result = await prisma.contatcs.update({
      where : {
        id
      },
      data : {
        email, name, phone
      }
    })

    return result
  }


}