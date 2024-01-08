import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";

import { userRoutes } from './routes/user.routes'
import { contactsRoutes } from './routes/contact.routes'

const app : FastifyInstance = fastify({logger: false})

app.register(userRoutes, {prefix: '/users'})
app.register(contactsRoutes, {prefix: '/contacts'})

app.listen({
  port: 3100
}, 
()=> console.log('Server is running 3100')
)

