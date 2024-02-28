/*
  Warnings:

  - You are about to drop the column `Actors` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `director` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `yearPublished` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `movieVoteOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movieVoteOptions" DROP CONSTRAINT "movieVoteOptions_movieId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "Actors",
DROP COLUMN "director",
DROP COLUMN "yearPublished";

-- DropTable
DROP TABLE "movieVoteOptions";

-- CreateTable
CREATE TABLE "MovieVoteOption" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieVoteOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MovieVoteOption" ADD CONSTRAINT "MovieVoteOption_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
