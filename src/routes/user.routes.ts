
import { UserCreate } from './../interfaces/user.interface';

import { UserUseCase } from '../usecases/user.usecase';
import { FastifyInstance } from 'fastify';


export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase()
  //@ts-ignore
  fastify.post<{ Body: UserCreate }>('/', async (req, reply) => {

    const { name, email } = req.body

    try {
      const data = await userUseCase.create({ name, email })
      return reply.send(data)

    } catch (error) {
      reply.send(error)
    }
  })

  //@ts-ignore
  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'oi' })
  })

}