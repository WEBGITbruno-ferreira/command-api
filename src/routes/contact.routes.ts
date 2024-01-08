import { FastifyInstance } from 'fastify';
import { authMiddleware } from '../middlewares/auth.middleware';

import { ContactUseCase } from '../usecases/contact.usecase';
import { ContactCreate } from './../interfaces/contacts.interface';


export async function contactsRoutes(fastify: FastifyInstance) {
  const contactUseCase = new ContactUseCase()

    //@ts-ignore
  fastify.addHook('preHandler', authMiddleware)


  //@ts-ignore
  fastify.post<{ Body: ContactCreate }>('/', async (req, reply) => {

    const { name, email, phone } = req.body
    const userEmail = req.headers['email'];

    try {
      const data = await contactUseCase.create({email,phone,name,userEmail})
      return reply.send(data)

    } catch (error) {
      reply.send(error)
    }
  })

  //@ts-ignore
  fastify.get('/', async (req, reply) => {
    const emailUser = req.headers['email']
    try {
      const data = await contactUseCase.listAllContacts(emailUser)
      return reply.send(data)
    } catch (error) {
      reply.send(error)
    }
  })

}