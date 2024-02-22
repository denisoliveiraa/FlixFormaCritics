import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import {z} from "zod";

const app = fastify()


const prisma = new PrismaClient()

app.post('/movie', async (request, reply) => {
  const createPollBody = z.object({
    title: z.string()
  })
  const {title } = createPollBody.parse(request.body)

  const movie = await prisma.movie.create({
    data: {
      title,
    }
  })

  return reply.status(201).send({movieId: movie.id})
})

app.listen({port: 7412}).then(() => {
  console.log("Rodando")
})