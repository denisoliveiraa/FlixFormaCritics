import fastify from "fastify";
import {getMovie} from "../http/routes/get-movie"
import { createMovie } from "./routes/create-movie"

const app = fastify()

app.register(createMovie)
app.register(getMovie)

app.listen({port: 7412}).then(() => {
  console.log("Rodando")
})