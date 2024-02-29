import {prisma} from '../../lib/prisma'
import { FastifyInstance } from 'fastify'
import {z} from 'zod'

export async function getMovie(app: FastifyInstance){
  app.get('/movie/:movieId', async (request, reply) => {
    const getMovieParams = z.object({
      movieId: z.string().uuid()
    })
    const {movieId} = getMovieParams.parse(request.params)

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    })

    return reply.status(200).send({movie})

  } )

}
