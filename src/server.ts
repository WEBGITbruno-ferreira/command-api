import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";

const app : FastifyInstance = fastify({logger: false})

app.listen({
  port: 3100
}, 
()=> console.log('Server is running 3100')
)