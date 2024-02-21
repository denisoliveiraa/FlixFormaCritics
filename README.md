his is a simple movie review application built with Node.js, Prisma, Fastify, Docker, and TypeScript. The purpose of this project is to allow users to view movies, leave comments, and vote on their favorite films.

Features
Browse a list of movies
View detailed information about each movie
Leave comments on movies
Vote for your favorite movies
Dockerized for easy deployment
Prerequisites
Make sure you have the following tools installed before running the application:

Node.js
Docker
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/movie-review-app.git
Install dependencies:

bash
Copy code
cd movie-review-app
npm install
Set up the database:

bash
Copy code
npm run migrate
Run the application:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000.

Project Structure
src: Contains the source code for the application.
controllers: Handles the application logic.
models: Defines the database models using Prisma.
routes: Defines the API routes using Fastify.
services: Contains any additional services used in the application.
migrations: Contains database migration files.
docker: Contains Docker-related files for containerization.
types: TypeScript type definitions.
Environment Variables
Make sure to set the necessary environment variables in a .env file:

env
Copy code
DATABASE_URL=your_database_url
PORT=3000
Docker
To run the application using Docker, use the following commands:

bash
Copy code
docker build -t movie-review-app .
docker run -p 3000:3000 -d movie-review-app