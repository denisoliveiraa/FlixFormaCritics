import { prisma } from "../../lib/prisma";
import fastify, { FastifyInstance } from "fastify";
import {z} from "zod";

const app = fastify()

export async function createMovie(app: FastifyInstance){

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
  
    await prisma.movieVoteOption.createMany({
      data: movieOptionsVote.map(option => {
        return {title: option, movieId: movie.id}
      })
    })
  
    return reply.status(201).send({movieId: movie.id})
  })

}
