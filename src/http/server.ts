import fastify from "fastify";

import { createMovie } from "./routes/create-movie"

const app = fastify()

app.register(createMovie)

app.listen({port: 7412}).then(() => {
  console.log("Rodando")
})