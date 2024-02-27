import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import {z} from "zod";

const app = fastify()


const prisma = new PrismaClient()

app.post('/movie', async (request, reply) => {
  const createPollBody = z.object({
    title: z.string(),
    movieOptionsVote: z.array(z.string())
  })
  const {title, movieOptionsVote } = createPollBody.parse(request.body)

  const movie = await prisma.movie.create({
    data: {
      title,
      movieVoteOptions:{
        createMany:{
          data: movieOptionsVote.map(option => {
            return {title: option}
          })
            
          }
        }
    }
  })

  await prisma.movieVoteOptions.createMany({
    data: movieOptionsVote.map(option => {
      return {title: option, movieId: movie.id}
    })
  })

  return reply.status(201).send({movieId: movie.id})
})

app.listen({port: 7412}).then(() => {
  console.log("Rodando")
})